import os
from html import unescape
from typing import Optional

import chevron
import markdown


class Poem(object):
    def __init__(self, file_path) -> None:
        _, file_md = os.path.split(file_path)
        file_name, _ = os.path.splitext(file_md)
        self.file_name = file_name
        with open(file_path, 'r', encoding='utf-8') as poem_file:
            self.title = poem_file.readline().strip().replace("# ", "")
            self.content = markdown.markdown(poem_file.read(), extensions=['nl2br'])

class Content(object):
    def __init__(self, file_path) -> None:
        directory, month_markdown = os.path.split(file_path)
        month, _ = os.path.splitext(month_markdown)
        _, year = os.path.split(directory)
        self.year = year
        self.month = month
        with open(file_path, 'r', encoding='utf-8') as content_file:
            self.content = markdown.markdown(content_file.read(), extensions=['nl2br'])
            

if __name__ == '__main__':
    poems = []
    for poem_markdown_file in os.listdir('poems/markdown'):
        file_path = os.path.join(f'poems/markdown/{poem_markdown_file}')
        poem = Poem(file_path)
        poems.append(poem)
        with open('poems/poem.mustache', 'r', encoding='utf-8') as poem_template, open(f'poems/{poem.file_name}.html', 'w', encoding='utf-8') as html_file:
            html_file.write(chevron.render(poem_template, {'title': poem.title, 'content': poem.content}))
    poem_titles = [{'title': poem.title, 'link': f'{poem.file_name}.html'} for poem in poems]
    with open('poems/list.mustache', 'r') as list_template, open('poems/index.html', 'w') as index_html:
        index_html.write(chevron.render(list_template, {'poems': poem_titles}))


    roundups = []
    for year in os.listdir('media/markdown'):
        for month_file in os.listdir(f'media/markdown/{year}'):
            file_path = os.path.join(f'media/markdown/{year}/{month_file}')
            roundup = Content(file_path)
            roundups.append(roundup)
            os.makedirs(f'media/{roundup.year}', exist_ok=True)
            with open('media/content.mustache', 'r', encoding='utf-8') as roundup_template, open(f'media/{roundup.year}/{roundup.month}.html', 'w', encoding='utf-8') as html_file:
                html_file.write(chevron.render(roundup_template, {'month': roundup.month, 'year': roundup.year, 'content': roundup.content}))
    roundup_titles = [{'month': roundup.month, 'year': roundup.year, 'link': f'{roundup.year}/{roundup.month}.html'} for roundup in roundups]
    with open('media/list.mustache', 'r') as list_template, open('media/index.html', 'w') as index_html:
        index_html.write(chevron.render(list_template, {'roundups': roundup_titles}))
