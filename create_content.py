#!/usr/bin/env python3
"""
Content Creation Script for Website

This script creates new content files (blog, project, experience) with proper frontmatter
for an Astro-based website. It includes comprehensive field support based on existing
content structure analysis.

Features:
- Interactive input collection with validation
- Comprehensive frontmatter generation for all content types
- Image file copying and validation
- URL and date validation
- Directory name sanitization
- Confirmation prompts before creation

Usage:
    python create_content.py --blog
    python create_content.py --project  
    python create_content.py --experience
"""

import argparse
import datetime
import os
import shutil
import urllib.parse


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
        print(f"Error: Invalid date format. Please use YYYY-MM-DD format")
        return False


def validate_imgpath(path):
    if not os.path.exists(path):
        print(f"Error: File '{path}' does not exist")
        return False
    if not path.lower().endswith(('.png', '.jpeg', '.jpg')):
        print(f"Error: File must be a PNG, JPEG, or JPG image")
        return False
    return True


def get_ext(path):
    return path.split(".")[-1]


def validate_url(url):
    try:
        result = urllib.parse.urlparse(url)
        return all([result.scheme, result.netloc])
    except Exception:
        print(f"Error: Invalid URL format")
        return False


def sanitize_for_directory(name):
    """Convert a name to a directory-safe format"""
    return '-'.join(name.lower().split())


def confirm_creation(content_type, dir_path):
    """Ask for confirmation before creating content"""
    print(f"\n{content_type.title()} will be created at: {dir_path}")
    confirm = input("Continue? (y/n): ").lower().strip()
    return confirm in ['y', 'yes']


def create_experience():
    title = get_input("Title for new experience")
    company = get_input("Name of company")
    companyLink = get_input("Link to company website", check_fn=validate_url)
    where = get_input("Location (e.g., New York City, NY)", required=False)
    startDate = get_input("Start date yyyy-mm-dd", check_fn=validate_date)
    endDate = get_input("End date yyyy-mm-dd", required=False, check_fn=validate_date)
    languages = get_input("Programming languages used", required=False, inp_type=list)
    tools = get_input("Programming tools used", required=False, inp_type=list)
    imgPath = get_input("Company logo image file path", check_fn=validate_imgpath)
    slug = get_input("Webpage slug")
    
    if endDate == "":
        dir_name = f"{startDate}-{sanitize_for_directory(company)}"
        endDate = "2099-12-31"
    else:
        dir_name = f"{endDate}-{sanitize_for_directory(company)}"
    dir_path = os.path.join("src", "content", "experience", dir_name)
    
    if not confirm_creation("experience", dir_path):
        print("Experience creation cancelled")
        return
    os.makedirs(dir_path, exist_ok=True)
    with open(os.path.join(dir_path, "index.md"), "w+") as out:
        out.write(f"---\n")
        out.write(f"title: {title}\n")
        out.write(f"company: {company}\n")
        out.write(f"companyLink: {companyLink}\n")
        if where != "":
            out.write(f"where: {where}\n")
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
        out.write(f"slug: {slug}\n")
        out.write(f"postType: experience\n")
        out.write(f"image: featured.{get_ext(imgPath)}\n")
        out.write(f"---\n")
    shutil.copy2(imgPath, os.path.join(dir_path, f"featured.{get_ext(imgPath)}"))
    print("Experience created")


def create_project():
    proj_name = get_input("Project directory name")
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
        dir_name = f"{startDate}-{sanitize_for_directory(proj_name)}"
        endDate = "2099-12-31"
    else:
        dir_name = f"{endDate}-{sanitize_for_directory(proj_name)}"
    dir_path = os.path.join("src", "content", "projects", dir_name)
    
    if not confirm_creation("project", dir_path):
        print("Project creation cancelled")
        return
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
        out.write(f"slug: {slug}\n")
        out.write(f"postType: project\n")
        out.write(f"image: featured.{get_ext(imgPath)}\n")
        out.write(f"---\n")
    shutil.copy2(imgPath, os.path.join(dir_path, f"featured.{get_ext(imgPath)}"))
    print("Project created")


def create_blog():
    blog_name = get_input("Blog directory name")
    title = get_input("Title for new blog")
    date = get_input("Blog date yyyy-mm-dd", check_fn=validate_date)
    tags = [x.lower() for x in get_input("Tags", required=False, inp_type=list)]
    slug = get_input("Webpage slug")
    
    dir_name = f"{date}-{sanitize_for_directory(blog_name)}"
    dir_path = os.path.join("src", "content", "blogs", dir_name)
    
    if not confirm_creation("blog", dir_path):
        print("Blog creation cancelled")
        return
    os.makedirs(dir_path, exist_ok=True)
    with open(os.path.join(dir_path, "index.md"), "w+") as out:
        out.write(f"---\n")
        out.write(f"title: {title}\n")
        out.write(f"date: {date}\n")
        if len(tags) > 0:
            out.write(f"tags:\n")
            for tag in tags:
                out.write(f"  - {tag}\n")
        out.write(f"slug: {slug}\n")
        out.write(f"postType: blog\n")
        out.write(f"---\n\n")
        out.write(f"<!--excerpt-->\n")
    print("Blog created")


def main():
    args = parse_args()
    if args.experience:
        create_experience()
    elif args.project:
        create_project()
    elif args.blog:
        create_blog()


if __name__ == "__main__":
    main()

