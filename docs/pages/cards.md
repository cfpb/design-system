---
title: Cards
layout: variation
section: patterns
secondary_section: Layout options
status: Released
description: Cards are blocks of content that are surrounded by a border.
variation_groups:
  - variation_group_name: Types
    variations:
      - variation_description: |-
          A single card with multiple links.
          In this layout the heading is a link.
        variation_code_snippet: >-
          <article class="m-card">
              <h2 class="m-card_heading">
                  <a href="#">
                      <div class="m-card_icon">{% include icons/idea.svg %}</div>
                      <span>Bank accounts</span>
                  </a>
              </h2>

              <ul class="m-list">

                  <li class="m-list_item">
                      How quickly can I get money after I deposit a check into my
                      checking account? What is a deposit hold?
                      <a href="#" class="a_link">
                          Read answer
                      </a>
                  </li>

                  <li class="m-list_item">
                      I would like to be able to have my friend or family member
                      help with my bill-paying and banking.
                      What are my options?
                      <a href="#" class="a_link">
                          Read answer
                      </a>
                  </li>

              </ul>

              <p class="m-card_footer">
                  <a href="#">
                      Learn more about bank accounts
                  </a>
              </p>
          </article>
        variation_name: Single card
      - variation_name: Featured card
        variation_description: |-
          A single featured card.
          The `.m-card__featured` modifier is added.
        variation_code_snippet: |-
          <article class="m-card m-card__featured">
              <a href="#">
                  <h2 class="m-card_heading">
                      <div class="m-card_icon">
                          {% include icons/idea.svg %}
                      </div>
                  </h2>
                  <p>
                      Have a problem with a financial product or service?
                  </p>
                  <div class="m-card_footer">
                      <span>Submit a complaint</span>
                  </div>
              </a>
          </article>
  - variations:
      - variation_name: Card group
        variation_description: A default group of cards together is stacked vertically.
        variation_code_snippet: >-
          <div class="o-card-group">
              <div class="o-card-group_cards">
                  <article class="m-card">
                      <h2 class="m-card_heading">
                          <a href="#">
                              <div class="m-card_icon">{% include icons/idea.svg %}</div>
                              <span>Bank accounts</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list_item">
                              How quickly can I get money after I deposit a check
                              into my checking account? What is a deposit hold?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list_item">
                              I would like to be able to have my friend or family
                              member help with my bill-paying and banking.
                              What are my options?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card_footer">
                          <a href="#">
                              Learn more about bank accounts
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card_heading">
                          <a href="#">
                              <div class="m-card_icon">{% include icons/car.svg %}</div>
                              <span>Auto loans</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list_item">
                              What effect will shopping for
                              an auto loan have on my credit?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list_item">
                              I owe more on my current loan than my current
                              vehicle is worth. What do I need to know
                              if I buy a new vehicle?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card_footer">
                          <a href="#">
                              Learn more about auto loans
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card_heading">
                          <a href="#">
                              <div class="m-card_icon">{% include icons/credit-card.svg %}</div>
                              <span>Credit cards</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list_item">
                              What is a credit card interest rate? What does APR mean?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list_item">
                              How do I dispute a charge on my credit card bill?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card_footer">
                          <a href="#">
                              Learn more about credit cards
                          </a>
                      </p>
                  </article>
              </div>
          </div>
      - variation_name: Card group - two column
        variation_description: |-
          A group of cards broken into two columns.
          The `.o-card-group__column-2` modifier is added.
        variation_code_snippet: >-
          <div class="o-card-group o-card-group__column-2">
              <div class="o-card-group_cards">
                  <article class="m-card">
                      <h2 class="m-card_heading">
                          <a href="#">
                              <div class="m-card_icon">{% include icons/idea.svg %}</div>
                              <span>Bank accounts</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list_item">
                              How quickly can I get money after I deposit a check
                              into my checking account? What is a deposit hold?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list_item">
                              I would like to be able to have my friend or family
                              member help with my bill-paying and banking.
                              What are my options?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card_footer">
                          <a href="#">
                              Learn more about bank accounts
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card_heading">
                          <a href="#">
                              <div class="m-card_icon">{% include icons/car.svg %}</div>
                              <span>Auto loans</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list_item">
                              What effect will shopping for
                              an auto loan have on my credit?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list_item">
                              I owe more on my current loan than my current
                              vehicle is worth. What do I need to know
                              if I buy a new vehicle?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card_footer">
                          <a href="#">
                              Learn more about auto loans
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card_heading">
                          <a href="#">
                              <div class="m-card_icon">{% include icons/credit-card.svg %}</div>
                              <span>Credit cards</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list_item">
                              What is a credit card interest rate? What does APR mean?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list_item">
                              How do I dispute a charge on my credit card bill?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card_footer">
                          <a href="#">
                              Learn more about credit cards
                          </a>
                      </p>
                  </article>
              </div>
          </div>
      - variation_name: Card group - three column
        variation_description: |-
          A group of cards broken into three columns.
          The `.o-card-group__column-3` modifier is added.
        variation_code_snippet: >-
          <div class="o-card-group o-card-group__column-3">
              <div class="o-card-group_cards">
                  <article class="m-card">
                      <h2 class="m-card_heading">
                          <a href="#">
                              <div class="m-card_icon">{% include icons/idea.svg %}</div>
                              <span>Bank accounts</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list_item">
                              How quickly can I get money after I deposit a check
                              into my checking account? What is a deposit hold?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list_item">
                              I would like to be able to have my friend or family
                              member help with my bill-paying and banking.
                              What are my options?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card_footer">
                          <a href="#">
                              Learn more about bank accounts
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card_heading">
                          <a href="#">
                              <div class="m-card_icon">{% include icons/car.svg %}</div>
                              <span>Auto loans</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list_item">
                              What effect will shopping for
                              an auto loan have on my credit?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list_item">
                              I owe more on my current loan than my current
                              vehicle is worth. What do I need to know
                              if I buy a new vehicle?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card_footer">
                          <a href="#">
                              Learn more about auto loans
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card_heading">
                          <a href="#">
                              <div class="m-card_icon">{% include icons/credit-card.svg %}</div>
                              <span>Credit cards</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list_item">
                              What is a credit card interest rate? What does APR mean?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list_item">
                              How do I dispute a charge on my credit card bill?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card_footer">
                          <a href="#">
                              Learn more about credit cards
                          </a>
                      </p>
                  </article>
              </div>
          </div>
      - variation_name: Featured card group
        variation_description: >-
          A group of featured cards together with a heading and green
          background.

          The `.o-card-group__bg-green` modifier is added to the group and

          the `.m-card__featured` modifier is added to the cards.
        variation_code_snippet: >-
          <div class="o-card-group o-card-group__column-3
          o-card-group__bg-green">
              <h2>We want to hear from you</h2>
              <div class="o-card-group_cards">
                  <article class="m-card m-card__featured">
                      <a href="#">
                          <h2 class="m-card_heading">
                              <div class="m-card_icon">
                                  {% include icons/complaint.svg %}
                              </div>
                          </h2>
                          <p>
                              Have a problem with a financial product or service?
                          </p>
                          <div class="m-card_footer">
                              <span>Submit a complaint</span>
                          </div>
                      </a>
                  </article>

                  <article class="m-card m-card__featured">
                      <a href="#">
                          <h2 class="m-card_heading">
                              <div class="m-card_icon">
                                  {% include icons/idea.svg %}
                              </div>
                          </h2>
                          <p>
                              Have a question on a financial topic?
                              Browse answers to hundreds of financial questions.
                          </p>
                          <div class="m-card_footer">
                              <span>Browse Ask CFPB</span>
                          </div>
                      </a>
                  </article>

                  <article class="m-card m-card__featured">
                      <a href="#">
                          <h2 class="m-card_heading">
                              <div class="m-card_icon">
                                  {% include icons/open-quote.svg %}
                              </div>
                          </h2>
                          <p>
                              Tell us your experiences with money
                              and financial services. The CFPB is listening.
                          </p>
                          <div class="m-card_footer">
                              <span>Tell your story</span>
                          </div>
                      </a>
                  </article>
              </div>
          </div>
    variation_group_name: Groups
use_cases: ""
content_guidelines: ""
behavior: ""
accessibility: ""
last_updated: 2019-10-21T20:38:39.851Z
research: ""
---
