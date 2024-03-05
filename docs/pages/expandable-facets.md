---
title: Expandable facets
layout: variation
section: components
variation_groups:
  - variation_group_name: Standard expandable facet
    variations:
      - variation_is_deprecated: false
        variation_code_snippet: >
          <div class="o-expandable-facet">
              <button class="o-expandable-facet_header o-expandable-facet_target" type="button">
                  <span class="h4 o-expandable-facet_label">
                      Topic
                  </span>
                  <span class="o-expandable-facet_link">
                      <span class="o-expandable-facet_cue o-expandable-facet_cue-open">
                          <span class="u-visually-hidden">
                              Show
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg cf-icon-svg__plus-round" viewBox="0 0 17 20.4"><path d="M16.416 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.916 7.917zm-2.958.01a.792.792 0 0 0-.792-.792H9.284V6.12a.792.792 0 1 0-1.583 0V9.5H4.32a.792.792 0 0 0 0 1.584H7.7v3.382a.792.792 0 0 0 1.583 0v-3.382h3.382a.792.792 0 0 0 .792-.791z"></path></svg>
                      </span>
                      <span class="o-expandable-facet_cue o-expandable-facet_cue-close">
                          <span class="u-visually-hidden">
                              Hide
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg cf-icon-svg__minus-round" viewBox="0 0 17 20.4"><path d="M16.416 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.916 7.917zm-2.958.01a.792.792 0 0 0-.792-.792H4.32a.792.792 0 0 0 0 1.583h8.346a.792.792 0 0 0 .792-.791z"></path></svg>
                      </span>
                  </span>
              </button>

              <div class="o-expandable-facet_content">

                    <details class="o-input-tree">
                        <summary>
                            <div class="m-form-field m-form-field__checkbox">
                                <input class="a-checkbox" type="checkbox" id="test_it_1" name="test_checkbox">
                                <label class="a-label" for="test_it_1">
                                    <div>Inline label
                                    <span class="o-input-tree_cue-open">
                                        {% include icons/down.svg %}
                                    </span>
                                    <span class="o-input-tree_cue-close">
                                        {% include icons/up.svg %}
                                    </span></div>
                                </label>
                            </div>
                        </summary>
                            <ul class="o-input-tree_children">
                                <li>
                                    <div class="m-form-field m-form-field__checkbox">
                                        <input class="a-checkbox" type="checkbox" id="test_it_2" name="test_checkbox">
                                        <label class="a-label" for="test_it_2">Inline label</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="m-form-field m-form-field__checkbox">
                                        <input class="a-checkbox" type="checkbox" id="test_it_3" name="test_checkbox">
                                        <label class="a-label" for="test_it_3">Inline label</label>
                                    </div>
                                </li>
                            </ul>
                    </details>

              </div>

          </div>
     - variation_is_deprecated: false
        variation_code_snippet: >
          <div class="o-expandable-facet o-expandable-facet__onload-open">
              <button class="o-expandable-facet_header o-expandable-facet_target" type="button">
                  <span class="h4 o-expandable-facet_label">
                      Topic
                  </span>
                  <span class="o-expandable-facet_link">
                      <span class="o-expandable-facet_cue o-expandable-facet_cue-open">
                          <span class="u-visually-hidden">
                              Show
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg cf-icon-svg__plus-round" viewBox="0 0 17 20.4"><path d="M16.416 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.916 7.917zm-2.958.01a.792.792 0 0 0-.792-.792H9.284V6.12a.792.792 0 1 0-1.583 0V9.5H4.32a.792.792 0 0 0 0 1.584H7.7v3.382a.792.792 0 0 0 1.583 0v-3.382h3.382a.792.792 0 0 0 .792-.791z"></path></svg>
                      </span>
                      <span class="o-expandable-facet_cue o-expandable-facet_cue-close">
                          <span class="u-visually-hidden">
                              Hide
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg cf-icon-svg__minus-round" viewBox="0 0 17 20.4"><path d="M16.416 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.916 7.917zm-2.958.01a.792.792 0 0 0-.792-.792H4.32a.792.792 0 0 0 0 1.583h8.346a.792.792 0 0 0 .792-.791z"></path></svg>
                      </span>
                  </span>
              </button>

              <div class="o-expandable-facet_content">

                    <details class="o-input-tree">
                        <summary>
                            <div class="m-form-field m-form-field__checkbox">
                                <input class="a-checkbox" type="checkbox" id="test_it_1" name="test_checkbox">
                                <label class="a-label" for="test_it_1">
                                    <div>Inline label
                                    <span class="o-input-tree_cue-open">
                                        {% include icons/down.svg %}
                                    </span>
                                    <span class="o-input-tree_cue-close">
                                        {% include icons/up.svg %}
                                    </span></div>
                                </label>
                            </div>
                        </summary>
                            <ul class="o-input-tree_children">
                                <li>
                                    <div class="m-form-field m-form-field__checkbox">
                                        <input class="a-checkbox" type="checkbox" id="test_it_2" name="test_checkbox">
                                        <label class="a-label" for="test_it_2">Inline label</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="m-form-field m-form-field__checkbox">
                                        <input class="a-checkbox" type="checkbox" id="test_it_3" name="test_checkbox">
                                        <label class="a-label" for="test_it_3">Inline label</label>
                                    </div>
                                </li>
                            </ul>
                    </details>

              </div>

          </div>
---
