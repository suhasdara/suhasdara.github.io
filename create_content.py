import argparse
import datetime
import os
import shutil
import urllib


def parse_args():
    parser = argparse.ArgumentParser()
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--experience", help="add new experience", action="store_true")
    group.add_argument("--project", help="add new project", action="store_true")
    group.add_argument("--blog", help="add new blog", action="store_true")
    return parser.parse_args()


def get_input(message, required=True, inp_type=str, check_fn=None):
    if inp_type not in [str, list]:
        raise ValueError("inp_type should be str or list")
    
    add_on = ""
    if inp_type == list:
        add_on += " (comma separated)"
    if required:
        add_on += " (required)"
    else:
        add_on += " (leave blank if unknown)"
    
    inp = None
    while inp is None:
        test = input(f"{message}{add_on}: ")
        if required and test == "":
            continue
        if (check_fn is not None) and (test != "") and (not check_fn(test)):
            continue
        if inp_type == list:
            inp = [] if test == "" else test.split(",")
        elif inp_type == str:
            inp = test
    return inp


def validate_date(date):
    try:
        datetime.datetime.strptime(date, "%Y-%m-%d")
        return True
    except ValueError:
        return False


def validate_imgpath(path):
    if not os.path.exists(path):
        return False
    if not path.lower().endswith(('.png', '.jpeg', '.jpg')):
        return False
    return True


def get_ext(path):
    return path[-6:].split(".")[1]


def validate_url(url):
    try:
        result = urllib.parse.urlparse(url)
        return all([result.scheme, result.netloc])
    except:
        return False


def create_experience():
    title = get_input("Title for new experience")
    company = get_input("Name of company")
    companyLink = get_input("Link to company website", check_fn=validate_url)
    startDate = get_input("Start date yyyy-mm-dd", check_fn=validate_date)
    endDate = get_input("End date yyyy-mm-dd", required=False, check_fn=validate_date)
    languages = get_input("Programming languages used", required=False, inp_type=list)
    tools = get_input("Programming tools used", required=False, inp_type=list)
    imgPath = get_input("Company logo image file path", check_fn=validate_imgpath)
    slug = get_input("Webpage slug")
    
    if endDate == "":
        dir_name = f"{startDate}-{'-'.join(company.split(' '))}"
        endDate = "2099-12-31"
    else:
        dir_name = f"{endDate}-{'-'.join(company.split(' '))}"
    dir_path = os.path.join("content", "experience", dir_name)
    os.makedirs(dir_path, exist_ok=True)
    with open(os.path.join(dir_path, "index.md"), "w+") as out:
        out.write(f"---\n")
        out.write(f"title: {title}\n")
        out.write(f"company: {company}\n")
        out.write(f"companyLink: {companyLink}\n")
        out.write(f"startDates:\n")
        out.write(f"  - {startDate}\n")
        out.write(f"endDates:\n")
        out.write(f"  - {endDate}\n")
        if len(languages) > 0:
            out.write(f"languages:\n")
            for lang in languages:
                out.write(f"  - {lang}\n")
        if len(tools) > 0:
            out.write(f"tools:\n")
            for tool in tools:
                out.write(f"  - {tool}\n")
        out.write(f"slug: /experience/{slug}\n")
        out.write(f"postType: experience\n")
        out.write(f"image: featured.{get_ext(imgPath)}\n")
        out.write(f"---\n")
    shutil.copy2(imgPath, os.path.join(dir_path, f"featured.{get_ext(imgPath)}"))
    print("Experience created")


def create_project():
    proj_name = get_input("Project dir name")
    title = get_input("Title for new project")
    startDate = get_input("Start date yyyy-mm-dd", check_fn=validate_date)
    endDate = get_input("End date yyyy-mm-dd", required=False, check_fn=validate_date)
    team = get_input("Names of team members", required=False, inp_type=list)
    languages = get_input("Programming languages used", required=False, inp_type=list)
    tools = get_input("Programming tools used", required=False, inp_type=list)
    repository = get_input("Repository link", required=False, check_fn=validate_url)
    paperSlug = get_input("Research paper slug", required=False)
    projectLink = get_input("Project website link", required=False, check_fn=validate_url)
    demoLink = get_input("Demo video link", required=False, check_fn=validate_url)
    imgPath = get_input("Thumbnail image file path", check_fn=validate_imgpath)
    slug = get_input("Webpage slug")
    
    if endDate == "":
        dir_name = f"{startDate}-{'-'.join(proj_name.split(' '))}"
        endDate = "2099-12-31"
    else:
        dir_name = f"{endDate}-{'-'.join(proj_name.split(' '))}"
    dir_path = os.path.join("content", "projects", dir_name)
    os.makedirs(dir_path, exist_ok=True)
    with open(os.path.join(dir_path, "index.md"), "w+") as out:
        out.write(f"---\n")
        out.write(f"title: {title}\n")
        out.write(f"startDates:\n")
        out.write(f"  - {startDate}\n")
        out.write(f"endDates:\n")
        out.write(f"  - {endDate}\n")
        if len(team) > 0:
            out.write(f"team:\n")
            for member in team:
                out.write(f"  - {member}\n")
        if len(languages) > 0:
            out.write(f"languages:\n")
            for lang in languages:
                out.write(f"  - {lang}\n")
        if len(tools) > 0:
            out.write(f"tools:\n")
            for tool in tools:
                out.write(f"  - {tool}\n")
        if repository != "":
            out.write(f"repository: {repository}\n")
        if paperSlug != "":
            out.write(f"paperSlug: /{paperSlug}\n")
        if projectLink != "":
            out.write(f"projectLink: {projectLink}\n")
        if demoLink != "":
            out.write(f"demoLink: {demoLink}\n")
        out.write(f"slug: /projects/{slug}\n")
        out.write(f"postType: project\n")
        out.write(f"image: featured.{get_ext(imgPath)}\n")
        out.write(f"---\n")
    shutil.copy2(imgPath, os.path.join(dir_path, f"featured.{get_ext(imgPath)}"))
    print("Project created")


def create_blog():
    blog_name = get_input("Blog dir name")
    title = get_input("Title for new blog")
    date = get_input("Blog date yyyy-mm-dd", check_fn=validate_date)
    tags = [x.lower() for x in get_input("Tags", inp_type=list)]
    slug = get_input("Webpage slug")
    
    dir_name = f"{date}-{'-'.join(blog_name.split(' '))}"
    dir_path = os.path.join("content", "blogs", dir_name)
    os.makedirs(dir_path, exist_ok=True)
    with open(os.path.join(dir_path, "index.md"), "w+") as out:
        out.write(f"---\n")
        out.write(f"title: {title}\n")
        out.write(f"date: {date}\n")
        if len(tags) > 0:
            out.write(f"tags:\n")
            for tag in tags:
                out.write(f"  - {tag}\n")
        out.write(f"slug: /blogs/{slug}\n")
        out.write(f"postType: blog\n")
        out.write(f"---\n\n")
        out.write(f"<!--excerpt-->\n")
    print("Blog created")


def main():
    args = parse_args()
    if args.experience:
    	create_experience()
    if args.project:
    	create_project()
    if args.blog:
    	create_blog()


if __name__ == "__main__":
    main()

