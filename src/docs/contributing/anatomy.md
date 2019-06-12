---
layout: default
title:  "Anatomy of a Component"
parent: "Contributing"
---

{% for term in site.data.component-repo-terms %}

## {{ term.name }}

{% if term.definition %}
{{ term.definition }}
{% endif %}

{% endfor %}
