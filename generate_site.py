import os
from html import unescape
from typing import Optional

import chevron
import markdown

MONTHS = {
    "All": 0,
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
}


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

class Voice(object):
    def __init__(self, file_path) -> None:
        file_name, _ = os.path.splitext(file_path)
        _, rel_file = os.path.split(file_name)
        self.file_name = rel_file
        self.voice = self.file_name.replace("-", " ")
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
    for year in os.listdir('media/markdown/roundup'):
        for month_file in os.listdir(f'media/markdown/roundup/{year}'):
            file_path = os.path.join(f'media/markdown/roundup/{year}/{month_file}')
            roundup = Content(file_path)
            roundups.append(roundup)
            os.makedirs(f'media/{roundup.year}', exist_ok=True)
            with open('media/content.mustache', 'r', encoding='utf-8') as roundup_template, open(f'media/{roundup.year}/{roundup.month}.html', 'w', encoding='utf-8') as html_file:
                html_file.write(chevron.render(roundup_template, {'month': roundup.month, 'year': roundup.year, 'content': roundup.content}))
    
    diverse_voices = []
    for diverse_file in os.listdir('media/markdown/diverse'):
        file_path = os.path.join(f'media/markdown/diverse/{diverse_file}')
        diverse_voice = Voice(file_path)
        diverse_voices.append(diverse_voice)
        with open('media/voice.mustache', 'r', encoding='utf-8') as voice_template, open(f'media/{diverse_voice.file_name}.html', 'w', encoding='utf-8') as html_file:
            html_file.write(chevron.render(voice_template, {'voice': diverse_voice.voice, 'content': diverse_voice.content}))
    
    roundup_titles = sorted([{'month': roundup.month, 'year': roundup.year, 'link': f'{roundup.year}/{roundup.month}.html'} for roundup in roundups], key=lambda item: (item['year'], MONTHS[item['month']]))
    diverse_titles = sorted([{'type': diverse_voice.voice, 'link': f'{diverse_voice.file_name}.html'} for diverse_voice in diverse_voices], key=lambda item: item['type'])
    with open('media/list.mustache', 'r') as list_template, open('media/index.html', 'w') as index_html:
        index_html.write(chevron.render(list_template, {'roundups': roundup_titles, 'diverse': diverse_titles}))
