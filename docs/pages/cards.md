---
title: Cards
layout: variation
section: patterns
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
              <h2 class="m-card__heading">
                  <a href="#">
                      <div class="m-card__icon">{% include icons/lightbulb.svg %}</div>
                      <span>Bank accounts</span>
                  </a>
              </h2>

              <ul class="m-list">

                  <li class="m-list__item">
                      How quickly can I get money after I deposit a check into my
                      checking account? What is a deposit hold?
                      <a href="#" class="a_link">
                          Read answer
                      </a>
                  </li>

                  <li class="m-list__item">
                      I would like to be able to have my friend or family member
                      help with my bill-paying and banking.
                      What are my options?
                      <a href="#" class="a_link">
                          Read answer
                      </a>
                  </li>

              </ul>

              <p class="m-card__footer">
                  <a href="#">
                      Learn more about bank accounts
                  </a>
              </p>
          </article>
        variation_name: Single card
      - variation_name: Topic card
        variation_description: |-
          A single topic card.
          The `.m-card--topic` modifier is added.
        variation_code_snippet: |-
          <article class="m-card m-card--topic">
              <a href="#">
                  <div class="m-card__icon">
                    {% include icons/lightbulb.svg %}
                  </div>
                  <div class="m-card__footer">
                      <span>Credit reports</span>
                  </div>
              </a>
          </article>
      - variation_name: Topic action card
        variation_description: |-
          A topic card with a call to action for its card group.
          The `.m-card--topic` and `.m-card--topic-action` modifiers are added.
        variation_code_snippet: |-
          <article class="m-card m-card--topic m-card--topic-action">
              <a href="#">
                  <div class="m-card__icon">
                    {% include icons/arrow-right-round.svg %}
                  </div>
                  <div class="m-card__footer">
                      <span>See all money topics</span>
                  </div>
              </a>
          </article>
      - variation_name: Breakout card
        variation_description: |-
          A single breakout card.
          The `.m-card--breakout` modifier is added.
        variation_code_snippet: |-
          <article class="m-card m-card--breakout">
              <a href="#">
                  <img class="m-card__img"
                       src="https://dummyimage.com/210x120/"
                       alt="">
                  <div class="m-card__inner-wrapper">
                      <div class="m-card__footer">
                           <span>
                                Buy a house
                           </span>
                      </div>
                  </div>
              </a>
          </article>
  - variations:
      - variation_name: Topic card group
        variation_description: A group of topic cards together.
        variation_code_snippet: |-
          <div class="o-card-group o-card-group--flow">
              <h2>Popular money topics</h2>
              <div class="o-card-group__cards">
                  <article class="m-card m-card--topic">
                    <a href="#">
                        <div class="m-card__icon">
                            {% include icons/lightbulb.svg %}
                        </div>
                        <div class="m-card__footer">
                            <span>Credit reports</span>
                        </div>
                    </a>
                  </article>

                  <article class="m-card m-card--topic">
                    <a href="#">
                        <div class="m-card__icon">
                            {% include icons/lightbulb.svg %}
                        </div>
                        <div class="m-card__footer">
                            <span>Debt collection</span>
                        </div>
                    </a>
                  </article>

                  <article class="m-card m-card--topic">
                    <a href="#">
                        <div class="m-card__icon">
                            {% include icons/lightbulb.svg %}
                        </div>
                        <div class="m-card__footer">
                            <span>Mortgages</span>
                        </div>
                    </a>
                  </article>

                  <article class="m-card m-card--topic">
                    <a href="#">
                        <div class="m-card__icon">
                            {% include icons/lightbulb.svg %}
                        </div>
                        <div class="m-card__footer">
                            <span>Credit cards</span>
                        </div>
                    </a>
                  </article>

                  <article class="m-card m-card--topic m-card--topic-action">
                    <a href="#">
                        <div class="m-card__icon">
                            {% include icons/arrow-right-round.svg %}
                        </div>
                        <div class="m-card__footer">
                            <span>See all money topics</span>
                        </div>
                    </a>
                </article>
              </div>
          </div>
      - variation_name: Breakout card group
        variation_description: A group of breakout cards together.
        variation_code_snippet: |-
          <div class="o-card-group o-card-group--column-3">
              <h2>Get help planning for future goals</h2>
              <div class="o-card-group__cards">
                  <article class="m-card m-card--breakout">
                    <a href="#">
                        <img class="m-card__img"
                            src="https://dummyimage.com/210x120/"
                            alt="">
                        <div class="m-card__inner-wrapper">
                            <div class="m-card__footer">
                                <span>
                                        Buy a house
                                </span>
                            </div>
                        </div>
                    </a>
                </article>

                  <article class="m-card m-card--breakout">
                    <a href="#">
                        <img class="m-card__img"
                            src="https://dummyimage.com/210x120/"
                            alt="">
                        <div class="m-card__inner-wrapper">
                            <div class="m-card__footer">
                                <span>
                                        Paying for college
                                </span>
                            </div>
                        </div>
                    </a>
                </article>

                  <article class="m-card m-card--breakout">
                    <a href="#">
                        <img class="m-card__img"
                            src="https://dummyimage.com/210x120/"
                            alt="">
                        <div class="m-card__inner-wrapper">
                            <div class="m-card__footer">
                                <span>
                                        Get an auto loan
                                </span>
                            </div>
                        </div>
                    </a>
                </article>
              </div>
          </div>
      - variation_name: Card group
        variation_description: A default group of cards together is stacked vertically.
        variation_code_snippet: >-
          <div class="o-card-group">
              <div class="o-card-group__cards">
                  <article class="m-card">
                      <h2 class="m-card__heading">
                          <a href="#">
                              <div class="m-card__icon">{% include icons/lightbulb.svg %}</div>
                              <span>Bank accounts</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list__item">
                              How quickly can I get money after I deposit a check
                              into my checking account? What is a deposit hold?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list__item">
                              I would like to be able to have my friend or family
                              member help with my bill-paying and banking.
                              What are my options?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card__footer">
                          <a href="#">
                              Learn more about bank accounts
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card__heading">
                          <a href="#">
                              <div class="m-card__icon">{% include icons/car.svg %}</div>
                              <span>Auto loans</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list__item">
                              What effect will shopping for
                              an auto loan have on my credit?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list__item">
                              I owe more on my current loan than my current
                              vehicle is worth. What do I need to know
                              if I buy a new vehicle?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card__footer">
                          <a href="#">
                              Learn more about auto loans
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card__heading">
                          <a href="#">
                              <div class="m-card__icon">{% include icons/credit-card.svg %}</div>
                              <span>Credit cards</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list__item">
                              What is a credit card interest rate? What does APR mean?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list__item">
                              How do I dispute a charge on my credit card bill?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card__footer">
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
          The `.o-card-group--column-2` modifier is added.
        variation_code_snippet: >-
          <div class="o-card-group o-card-group--column-2">
              <div class="o-card-group__cards">
                  <article class="m-card">
                      <h2 class="m-card__heading">
                          <a href="#">
                              <div class="m-card__icon">{% include icons/lightbulb.svg %}</div>
                              <span>Bank accounts</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list__item">
                              How quickly can I get money after I deposit a check
                              into my checking account? What is a deposit hold?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list__item">
                              I would like to be able to have my friend or family
                              member help with my bill-paying and banking.
                              What are my options?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card__footer">
                          <a href="#">
                              Learn more about bank accounts
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card__heading">
                          <a href="#">
                              <div class="m-card__icon">{% include icons/car.svg %}</div>
                              <span>Auto loans</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list__item">
                              What effect will shopping for
                              an auto loan have on my credit?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list__item">
                              I owe more on my current loan than my current
                              vehicle is worth. What do I need to know
                              if I buy a new vehicle?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card__footer">
                          <a href="#">
                              Learn more about auto loans
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card__heading">
                          <a href="#">
                              <div class="m-card__icon">{% include icons/credit-card.svg %}</div>
                              <span>Credit cards</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list__item">
                              What is a credit card interest rate? What does APR mean?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list__item">
                              How do I dispute a charge on my credit card bill?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card__footer">
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
          The `.o-card-group--column-3` modifier is added.
        variation_code_snippet: >-
          <div class="o-card-group o-card-group--column-3">
              <div class="o-card-group__cards">
                  <article class="m-card">
                      <h2 class="m-card__heading">
                          <a href="#">
                              <div class="m-card__icon">{% include icons/lightbulb.svg %}</div>
                              <span>Bank accounts</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list__item">
                              How quickly can I get money after I deposit a check
                              into my checking account? What is a deposit hold?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list__item">
                              I would like to be able to have my friend or family
                              member help with my bill-paying and banking.
                              What are my options?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card__footer">
                          <a href="#">
                              Learn more about bank accounts
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card__heading">
                          <a href="#">
                              <div class="m-card__icon">{% include icons/car.svg %}</div>
                              <span>Auto loans</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list__item">
                              What effect will shopping for
                              an auto loan have on my credit?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list__item">
                              I owe more on my current loan than my current
                              vehicle is worth. What do I need to know
                              if I buy a new vehicle?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card__footer">
                          <a href="#">
                              Learn more about auto loans
                          </a>
                      </p>
                  </article>

                  <article class="m-card">
                      <h2 class="m-card__heading">
                          <a href="#">
                              <div class="m-card__icon">{% include icons/credit-card.svg %}</div>
                              <span>Credit cards</span>
                          </a>
                      </h2>

                      <ul class="m-list">

                          <li class="m-list__item">
                              What is a credit card interest rate? What does APR mean?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                          <li class="m-list__item">
                              How do I dispute a charge on my credit card bill?
                              <a href="#" class="a_link">
                                  Read answer
                              </a>
                          </li>

                      </ul>

                      <p class="m-card__footer">
                          <a href="#">
                              Learn more about credit cards
                          </a>
                      </p>
                  </article>
              </div>
          </div>
      - variation_name: Card group - two count
        variation_description: |-
          A group of two cards.
          The `.o-card-group--count-2` modifier is added.
        variation_code_snippet: >-
          <div class="o-card-group o-card-group--count-2">
              <div class="o-card-group__cards">
                  <article class="m-card">
                    <h3 class="m-card__heading">
                        <a href="#">
                            Protecting your finances during the coronavirus emergency
                        </a>
                    </h3>
                    <p>
                        We are committed to providing up-to-date information and resources.
                        Learn more about protecting and managing your finances during this difficult time.
                    </p>
                    <div class="m-card__footer">
                        <a href="#">
                            Read more
                        </a>
                    </div>
                </article>

                 <article class="m-card">
                    <h3 class="m-card__heading">
                        <a href="#">
                            Striving for equity
                        </a>
                    </h3>
                    <p>
                        We’re working to build a stronger nation by advancing racial and economic equality for all.
                    </p>
                    <div class="m-card__footer">
                        <a href="#">
                            Read more
                        </a>
                    </div>
                </article>
              </div>
          </div>
      - variation_name: Card group - three count
        variation_description: |-
          A group of three cards.
          The `.o-card-group--count-3` modifier is added.
        variation_code_snippet: >-
          <div class="o-card-group o-card-group--count-3">
              <div class="o-card-group__cards">
                  <article class="m-card">
                    <h3 class="m-card__heading">
                        <a href="#">
                            Protecting your finances during the coronavirus emergency
                        </a>
                    </h3>
                    <p>
                        We are committed to providing up-to-date information and resources.
                        Learn more about protecting and managing your finances during this difficult time.
                    </p>
                    <div class="m-card__footer">
                        <a href="#">
                            Read more
                        </a>
                    </div>
                </article>

                 <article class="m-card">
                    <h3 class="m-card__heading">
                        <a href="#">
                            Striving for equity
                        </a>
                    </h3>
                    <p>
                        We’re working to build a stronger nation by advancing racial and economic equality for all.
                    </p>
                    <div class="m-card__footer">
                        <a href="#">
                            Read more
                        </a>
                    </div>
                </article>

                 <article class="m-card">
                    <h3 class="m-card__heading">
                        <a href="#">
                            Rental assistance helps renters and landlords make ends meet
                        </a>
                    </h3>
                    <p>
                        State and local programs are distributing billions of dollars in rental assistance to help renters stay housed during the pandemic.
                    </p>
                    <div class="m-card__footer">
                        <a href="#">
                            Read more
                        </a>
                    </div>
                </article>
              </div>
          </div>
      - variation_name: Card group - four count
        variation_description: |-
          A group of four cards.
          The `.o-card-group--count-4` modifier is added.
        variation_code_snippet: >-
          <div class="o-card-group o-card-group--count-4">
              <div class="o-card-group__cards">
                <article class="m-card">
                    <h3 class="m-card__heading">
                        <a href="#">
                            Protecting your finances during the coronavirus emergency
                        </a>
                    </h3>
                    <p>
                        We are committed to providing up-to-date information and resources.
                        Learn more about protecting and managing your finances during this difficult time.
                    </p>
                    <div class="m-card__footer">
                        <a href="#">
                            Read more
                        </a>
                    </div>
                 </article>

                 <article class="m-card">
                    <h3 class="m-card__heading">
                        <a href="#">
                            Striving for equity
                        </a>
                    </h3>
                    <p>
                        We’re working to build a stronger nation by advancing racial and economic equality for all.
                    </p>
                    <div class="m-card__footer">
                        <a href="#">
                            Read more
                        </a>
                    </div>
                </article>

                 <article class="m-card">
                    <h3 class="m-card__heading">
                        <a href="#">
                           Rental assistance helps renters and landlords make ends meet
                        </a>
                    </h3>
                    <p>
                        State and local programs are distributing billions of dollars in rental assistance to help renters stay housed during the pandemic.
                    </p>
                    <div class="m-card__footer">
                        <a href="#">
                            Read more
                        </a>
                    </div>
                </article>

                <article class="m-card">
                    <h3 class="m-card__heading">
                        <a href="#">
                            Protecting your finances during the coronavirus emergency
                        </a>
                    </h3>
                    <p>
                        We are committed to providing up-to-date information and resources.
                        Learn more about protecting and managing your finances during this difficult time.
                    </p>
                    <div class="m-card__footer">
                        <a href="#">
                            Read more
                        </a>
                    </div>
                </article>
              </div>
          </div>
    variation_group_name: Groups
use_cases: ''
guidelines: ''
behavior: ''
accessibility: ''
last_updated: 2019-10-21T20:38:39.851Z
eyebrow: Featured content
research: ''
---
