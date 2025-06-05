---
layout: default
title: Jak Banks
permalink: /
---

I write [Sowing Stars](https://sowingstars.substack.com/), a newsletter about soulmaking. This site contains the full galaxy of what I'm exploring.

{% assign notes = site.notes | where_exp: "item", "item.path contains '.md'" | sort: "date" | reverse %}
{% assign latest_note = notes | first %}

{% if notes.size > 0 %}
***

## Latest

### [{{ latest_note.title }}]({{ latest_note.url }})
{% if latest_note.date %}{{ latest_note.date | date: "%B %d, %Y" }}{% else %}Recently updated{% endif %}

{{ latest_note.content | strip_html | truncatewords: 30 }}
[Keep reading →]({{ latest_note.url }})

***

## Writing

<div class="writing-list">
{% for note in notes %}
  <div class="writing-item">
    <div class="date-prefix">{{ note.date | date: "%Y · %m" }}</div><a href="{{ note.url }}" class="writing-title">{{ note.title }}</a>
  </div>
{% endfor %}
</div>
{% endif %}

***
