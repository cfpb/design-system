# Changelog

All notable changes to this project will be documented in this file.

## [3.6.3](https://github.com/cfpb/design-system/compare/v3.6.2..3.6.3) - January  8, 2025

### PRs in this release

- PR #[2139](https://github.com/cfpb/design-system/pull/2139): Provide instantiated tooltip object on initialized component - Wyatt Pearsall

### General

- Provide instantiated tooltip object on initialized component - ([c4fee52](https://github.com/cfpb/design-system/commit/c4fee5263ea4869c914e980cbc8b9ce3beb9178b)) - Wyatt Pearsall
- Update jsdoc - ([72163a3](https://github.com/cfpb/design-system/commit/72163a3ac16e801179f32a5c8fbaa07cdba2dea1)) - Wyatt Pearsall
- Add tooltip update dist - ([4a3916b](https://github.com/cfpb/design-system/commit/4a3916bc13d5076153e6e3008f4bf18aa1c27a36)) - Wyatt Pearsall

## [3.6.2](https://github.com/cfpb/design-system/compare/v3.6.1..v3.6.2) - December 18, 2024

### PRs in this release

- PR #[2137](https://github.com/cfpb/design-system/pull/2137): Provide icon exports - Wyatt Pearsall

### General

- Update CHANGELOG.md - ([bfd91e3](https://github.com/cfpb/design-system/commit/bfd91e39d31d829ea8a2dcb296bea0fd9c36cbbd)) - Chris Contolini
- Provide icon exports - ([9eccdc4](https://github.com/cfpb/design-system/commit/9eccdc415730d3f0e3b42c28ba51fda00d3aa7f6)) - Wyatt Pearsall

## [3.6.1](https://github.com/cfpb/design-system/compare/v3.6.0..v3.6.1) - December  4, 2024

### PRs in this release

- PR #[2054](https://github.com/cfpb/design-system/pull/2054): Add new tooltip component to DS - Chris Contolini
- PR #[2133](https://github.com/cfpb/design-system/pull/2133): Add ESLint typescript resolver to fix exports issue - Chris Contolini

### General

- Return Tooltip instance to match JSDoc description - ([290b87e](https://github.com/cfpb/design-system/commit/290b87e4889c16c5e846e3039a7266ebb7c09e99)) - Chris Contolini

## [3.6.0](https://github.com/cfpb/design-system/compare/v3.5.0..v3.6.0) - December  3, 2024

### General

- Add new tooltip component to DS

We have two cf.gov apps that use tooltips but limited documentation
on best practices or how to use them in new projects. This PR adds
one implementation to the DS. It requires a third party library called
Tippy.js. - ([b718f49](https://github.com/cfpb/design-system/commit/b718f4925b35a1f0e396663dfa455fb9ed68d2de)) - Chris Contolini
- Rebuild dist bundles - ([e7d8d57](https://github.com/cfpb/design-system/commit/e7d8d5790b50d9eb4c2abe204ee1a70899876231)) - Chris Contolini
- Add exports config to DS package

The `exports` field allows multiple entrypoints to be defined instead of
just a single `main` entrypoint. This allows the bundled code to be selectively
imported by developers. For our purposes, we can package the majority of our DS
code into a single file but keep the tooltip code separate. Tooltips are used
on very few pages and they rely on a third party library that we don't want users
to unnecessarily download on every page of cf.gov.

See https://nodejs.org/api/packages.html#package-entry-points - ([005bce9](https://github.com/cfpb/design-system/commit/005bce900a9652fff77c746c108e05b5a9a778ab)) - Chris Contolini
- Hide tooltip trigger elements if JS is disabled - ([eb584f8](https://github.com/cfpb/design-system/commit/eb584f8dca6a07f9b1bb5a570ce9431a6136468c)) - Chris Contolini
- Change cursor to pointer on tooltip trigger hover - ([979f268](https://github.com/cfpb/design-system/commit/979f268281721fa6aca5900e1b90fa3d2e100f4d)) - CFPBot
- Rebuild assets, move new packages to yarn cache dir - ([e0e9531](https://github.com/cfpb/design-system/commit/e0e95310cf3d94706ec143e23caa90157f7129f2)) - Chris Contolini
- Remove erroneous auto-changelog dependency and config - ([980d9eb](https://github.com/cfpb/design-system/commit/980d9eb65147732323ce42f56014e17ffc638d5a)) - Chris Contolini

## [3.5.0](https://github.com/cfpb/design-system/compare/v3.4.14..v3.5.0) - November 26, 2024

### PRs in this release

- PR #[2127](https://github.com/cfpb/design-system/pull/2127): Update hero text margin to `auto 0` - Ans
- PR #[2128](https://github.com/cfpb/design-system/pull/2128): Remove `o-featured-content-module--left` - Ans

### General

- Update hero text margin to `auto 0` - ([a731483](https://github.com/cfpb/design-system/commit/a73148309e7d36ce20ed786f0b57b47d1acfa0d0)) - Ans
- Remove `o-featured-content-module--left` - ([c12548f](https://github.com/cfpb/design-system/commit/c12548feea774c37c781a7f1268551be3703094b)) - Ans

## [3.4.14](https://github.com/cfpb/design-system/compare/v3.4.13..v3.4.14) - November 21, 2024

### PRs in this release

- PR #[2122](https://github.com/cfpb/design-system/pull/2122): Add non-clickable filter tag - Ans

### General

- Add non-clickable filter tag - ([b0b50c1](https://github.com/cfpb/design-system/commit/b0b50c1fe0b980273ee2f9b79e322b781f850ee8)) - Ans

## [3.4.13](https://github.com/cfpb/design-system/compare/v3.4.12..v3.4.13) - November 21, 2024

### PRs in this release

- PR #[2123](https://github.com/cfpb/design-system/pull/2123): Adjust date picker min-height/min-width to prevent size difference between empty and filled date picker - Ans

### General

- Adjust date picker min-height to prevent size difference between empty and filled date picker - ([1bb457a](https://github.com/cfpb/design-system/commit/1bb457a727354b5d154e19e08f7b41dcaf231ac4)) - Ans
- Date picker: Adjust min-width to be a nice round number - ([5d41c85](https://github.com/cfpb/design-system/commit/5d41c859fb91d0b3b7df79061415716a5b9e7a09)) - Ans
- Remove top/bottom padding - ([30f215c](https://github.com/cfpb/design-system/commit/30f215ccb0fd5d7df1c2424ab587dbb5fe3281c4)) - Ans
- Date picker: Reduce height by 1px - ([ef7a039](https://github.com/cfpb/design-system/commit/ef7a03962b400fcd0eca1a2308048ad16c876fee)) - Ans
- Regenerate assets - ([56ca4fd](https://github.com/cfpb/design-system/commit/56ca4fd28bd026feb140f4308dd2e47b441e2c2a)) - Ans

## [3.4.12](https://github.com/cfpb/design-system/compare/v3.4.11..v3.4.12) - November 21, 2024

### PRs in this release

- PR #[2117](https://github.com/cfpb/design-system/pull/2117): Add overflow-wrap: break-word to `a-link__text` - Ans
- PR #[2121](https://github.com/cfpb/design-system/pull/2121): Tweak and consolidate date picker - Ans

### General

- Add overflow-wrap: break-word to `a-link__text` - ([362af9b](https://github.com/cfpb/design-system/commit/362af9b39034f31ca54bf4f84b3eae769aa36868)) - Ans
- Rebuild assets - ([696aa1d](https://github.com/cfpb/design-system/commit/696aa1d51e14bce883e7bdfd6084d50572b59104)) - Ans
- Tweak and consolidate date picker - ([b950e9d](https://github.com/cfpb/design-system/commit/b950e9d051b0d1ebc7d4e031012784dd43ccac0f)) - Ans
- Update date-picker.md - ([62cc483](https://github.com/cfpb/design-system/commit/62cc483290cc3e6fb1ebb9e8806ab4c29366450c)) - Ans
- More tweaks to wrangle aligning iOS with everyone else - ([c41101f](https://github.com/cfpb/design-system/commit/c41101f6be4994c8532b884191525df269529a9d)) - Ans

## [3.4.11](https://github.com/cfpb/design-system/compare/v3.4.10..v3.4.11) - November 19, 2024

### PRs in this release

- PR #[2118](https://github.com/cfpb/design-system/pull/2118): Add `u-w65pct` and `u-w15pct` utilities - Ans
- PR #[2116](https://github.com/cfpb/design-system/pull/2116): Adds date input example and adjusts baseline appearance - Ans

### General

- Add `u-w65pct` and `u-w15pct` utilities - ([ea2e45b](https://github.com/cfpb/design-system/commit/ea2e45bb961d4cd3fc1e5551c0b9ccf4fce74725)) - Ans
- Shrink demo width utility text size to fit on one line each - ([5b80eaa](https://github.com/cfpb/design-system/commit/5b80eaa670f1a32ce47f006c8d0d0fb02dd890b1)) - Ans
- Rebuild assets - ([533f0c6](https://github.com/cfpb/design-system/commit/533f0c640029664ccb44459b3859fe03f28ee64d)) - Ans
- Adds date input example and adjusts baseline appearance - ([0cd1019](https://github.com/cfpb/design-system/commit/0cd1019a10ecb2a35776d26778cfe60b15511c04)) - Ans
- Rebuild assets - ([869583a](https://github.com/cfpb/design-system/commit/869583add82cf0c4b6000ce28078aa88e8ff1e91)) - Ans

## [3.4.10](https://github.com/cfpb/design-system/compare/v3.4.9..v3.4.10) - November 19, 2024

### PRs in this release

- PR #[2120](https://github.com/cfpb/design-system/pull/2120): Add filter tag anchor markup example - Ans

### General

- Add filter tag link example - ([195cf5c](https://github.com/cfpb/design-system/commit/195cf5c3c16d6a755c4b482d227a75d229726790)) - Ans

## [3.4.9](https://github.com/cfpb/design-system/compare/v3.4.8..v3.4.9) - November 13, 2024

### PRs in this release

- PR #[2112](https://github.com/cfpb/design-system/pull/2112): Pagination: move z-index to buttons - Ans

### General

- Move z-index to buttons - ([48e4c68](https://github.com/cfpb/design-system/commit/48e4c68cda895e8b7103b4091627e6d31e859a88)) - Ans

## [3.4.8](https://github.com/cfpb/design-system/compare/v3.4.7..v3.4.8) - November 13, 2024

### PRs in this release

- PR #[2110](https://github.com/cfpb/design-system/pull/2110): Fix z-index on pagination - Ans

### General

- Fix z-index on pagination - ([1b26267](https://github.com/cfpb/design-system/commit/1b2626760824f74c333b7ea4d24bbfc0f5760cdb)) - Ans

## [3.4.7](https://github.com/cfpb/design-system/compare/v3.4.6..v3.4.7) - November 13, 2024

### PRs in this release

- PR #[2108](https://github.com/cfpb/design-system/pull/2108): Add text-free icon button examples - Ans
- PR #[2109](https://github.com/cfpb/design-system/pull/2109): Add button link state examples - Ans

### General

- Add text-free icon buttons - ([8527b37](https://github.com/cfpb/design-system/commit/8527b37bbaa56611d2883d43289c4a6c2d2e078a)) - Ans
- Tweak button dimensions - ([8595c33](https://github.com/cfpb/design-system/commit/8595c33afd3b92557c02d4494200e3d08729c053)) - Ans
- Rebuild assets - ([a27795f](https://github.com/cfpb/design-system/commit/a27795fe7fe0072e42b217f5e331a2736e1bcb5a)) - Ans

## [3.4.6](https://github.com/cfpb/design-system/compare/v3.4.5..v3.4.6) - November 13, 2024

### PRs in this release

- PR #[2106](https://github.com/cfpb/design-system/pull/2106): Refine button links - add icon examples - Ans

### General

- Refine button with link - ([5edc8e5](https://github.com/cfpb/design-system/commit/5edc8e5cc7124e4654a86f065b28d94e70bd45f7)) - Ans

## [3.4.5](https://github.com/cfpb/design-system/compare/v3.4.4..v3.4.5) - November 12, 2024

### PRs in this release

- PR #[2105](https://github.com/cfpb/design-system/pull/2105): Buttons: add `justify-content: center` - Ans

### General

- Add `justify-content: center` - ([c7993b5](https://github.com/cfpb/design-system/commit/c7993b5281ed84dd301c3640f9ce9ef0cce14c68)) - Ans
- Rebuild assets - ([2f1ab96](https://github.com/cfpb/design-system/commit/2f1ab964c1cfab0d4ad6b914baaac68382073d41)) - Ans

## [3.4.4](https://github.com/cfpb/design-system/compare/v3.4.3..v3.4.4) - November 12, 2024

### PRs in this release

- PR #[2103](https://github.com/cfpb/design-system/pull/2103): Add `a-btn--hide-icon` class - Ans

### General

- Add `a-btn--hide-icon` class - ([d4bf92c](https://github.com/cfpb/design-system/commit/d4bf92c4a6583b3a5b852ca67eb63c86c31a611c)) - Ans

## [3.4.3](https://github.com/cfpb/design-system/compare/v3.4.2..v3.4.3) - November  7, 2024

### PRs in this release

- PR #[2104](https://github.com/cfpb/design-system/pull/2104): Fix npm badge image URL - Ans

### General

- Fix badge URL - ([ce2a58a](https://github.com/cfpb/design-system/commit/ce2a58a6b4b82b6dee28725e502462bd8ed67e47)) - Ans

## [3.4.2](https://github.com/cfpb/design-system/compare/v3.4.1..v3.4.2) - November  7, 2024

### PRs in this release

- PR #[2102](https://github.com/cfpb/design-system/pull/2102): Remove extraneous button-with-icon.scss reference - Ans

### General

- Remove button-with-icon reference - ([ee36f36](https://github.com/cfpb/design-system/commit/ee36f3676c2160415c8e75cf0c8affffad9a7f22)) - Ans

## [3.4.1](https://github.com/cfpb/design-system/compare/v3.4.0..v3.4.1) - November  6, 2024

### PRs in this release

- PR #[2101](https://github.com/cfpb/design-system/pull/2101): Add behavior JS unit tests - Ans

### General

- Add behavior specs - ([dd956be](https://github.com/cfpb/design-system/commit/dd956be595a500b2fd654faa9c88700851057eb1)) - Ans

## [3.4.0](https://github.com/cfpb/design-system/compare/v3.3.1..v3.4.0) - November  6, 2024

### PRs in this release

- PR #[2100](https://github.com/cfpb/design-system/pull/2100): Update behavior method names - Ans

### General

- Update behavior method names - ([8ae891d](https://github.com/cfpb/design-system/commit/8ae891de2b6d0f3f3f6fd5744f174302ac3b0465)) - Ans
- Adjust release-it process - ([222f302](https://github.com/cfpb/design-system/commit/222f30216e47e36ca3f01d2835fe53280af8ba4e)) - Ans

## [3.3.1](https://github.com/cfpb/design-system/compare/v3.3.0..v3.3.1) - November  6, 2024

### PRs in this release

- PR #[2099](https://github.com/cfpb/design-system/pull/2099): Point to the right npm repo in the DS - Ans

### General

- Point to the right npm repo in the DS - ([f61ef71](https://github.com/cfpb/design-system/commit/f61ef71e4bdd0e7df503d6d8afade621ca561a75)) - Ans

## [3.3.0](https://github.com/cfpb/design-system/compare/v3.2.11..v3.3.0) - November  6, 2024

### PRs in this release

- PR #[2095](https://github.com/cfpb/design-system/pull/2095): Remove `u-break-word` - Ans

### General

- Remove `u-break-word` - ([e9df86d](https://github.com/cfpb/design-system/commit/e9df86d6ae6e0c5c800222a738da905e4ad86e83)) - Ans

## [3.2.11](https://github.com/cfpb/design-system/compare/v3.2.10..v3.2.11) - November  6, 2024

### PRs in this release

- PR #[2091](https://github.com/cfpb/design-system/pull/2091): Refactor buttons and pagination to fix alignment issues - Ans
- PR #[2098](https://github.com/cfpb/design-system/pull/2098): Linter fixes | Patch bump Cypress - Ans

### General

- Refactor buttons to fix alignment issues - ([3ee904e](https://github.com/cfpb/design-system/commit/3ee904ef5d1b45c149f6bde964d2cacb70675f8e)) - Ans
- Add `row-gap` - ([d6ea4c1](https://github.com/cfpb/design-system/commit/d6ea4c1480dfbf043a4dd0f37d59e73bbb9ed94f)) - Ans
- Linter fixes - ([6f84a1b](https://github.com/cfpb/design-system/commit/6f84a1b12fbd32720cd5f109d8d5ac0da683e51a)) - Ans

## [3.2.10](https://github.com/cfpb/design-system/compare/v3.2.9..v3.2.10) - November  6, 2024

### PRs in this release

- PR #[2096](https://github.com/cfpb/design-system/pull/2096): Remove `u-inline-block` - Ans

### General

- Bump changelog - ([ad0f6dc](https://github.com/cfpb/design-system/commit/ad0f6dc23d18cad72f3ff953e857a30261bebc60)) - Ans
- Remove `u-inline-block` - ([ad8824d](https://github.com/cfpb/design-system/commit/ad8824d097d77ce5291170b5ac8752e9c0499d3a)) - Ans

## [3.2.9](https://github.com/cfpb/design-system/compare/v3.2.8..v3.2.9) - November  6, 2024

### PRs in this release

- PR #[2097](https://github.com/cfpb/design-system/pull/2097): Add `u-small-text--subtle` - Ans

### General

- Tweak changelog config - ([e944523](https://github.com/cfpb/design-system/commit/e944523ee676c529483bb2583f74d2d380f7f411)) - Ans
- Add `u-small-text--subtle` - ([3108763](https://github.com/cfpb/design-system/commit/31087639e456f52370dfcaea57f0d14d48572e79)) - Ans
- Rebuild assets - ([6a6f917](https://github.com/cfpb/design-system/commit/6a6f91724677614eda3e2d0d474ec9912e450192)) - Ans

## [3.2.8](https://github.com/cfpb/design-system/compare/v3.2.7..v3.2.8) - November  1, 2024

### PRs in this release

- PR #[2083](https://github.com/cfpb/design-system/pull/2083): Update to ESLint@9.x - Ans
- PR #[2085](https://github.com/cfpb/design-system/pull/2085): Add button link example | Correctly vertically align button group link buttons - Ans

### General

- Update to ESLint@9.x - ([b7fff18](https://github.com/cfpb/design-system/commit/b7fff18ecbc44e9916d65738a52ed24e7cce9d75)) - Ans
- Add button link example | Correctly vertically align button group link buttons - ([3da715a](https://github.com/cfpb/design-system/commit/3da715a64b907cc71dc753395db42148408519fc)) - Ans
- Add button color to hover - ([5acef20](https://github.com/cfpb/design-system/commit/5acef20549ef2d2c224dfc767f24af740bf10fa2)) - Ans
- Change to center alignment - ([7f38dc7](https://github.com/cfpb/design-system/commit/7f38dc76307f4c9d00b581892259d676cb1fd867)) - Ans
- Switch to git-cliff from auto-changelog - ([2488161](https://github.com/cfpb/design-system/commit/2488161f3a13019778cec325c22870a0a7841933)) - Ans
- Rebuild assets - ([a6ff4d9](https://github.com/cfpb/design-system/commit/a6ff4d9740c7606a2740e30be6d27a28c6e5c4f8)) - Ans

## [3.2.7](https://github.com/cfpb/design-system/compare/v3.2.6..v3.2.7) - October 30, 2024

### PRs in this release

- PR #[2082](https://github.com/cfpb/design-system/pull/2082): Add `aria-hidden:true` to SVG icons - Ans

### General

- Adjust npm publishing config - ([2f20b8d](https://github.com/cfpb/design-system/commit/2f20b8d83eb7f46298ad5aaa6ad30b700fb85257)) - Ans
- Add `aria-hidden:true` to SVG icons - ([e1f4811](https://github.com/cfpb/design-system/commit/e1f481195648f7d270011de9217e3cf73d5b91cb)) - Ans
- Correctly process icons - ([181bea2](https://github.com/cfpb/design-system/commit/181bea2a44d02c2dd66f22c4f1d461e985d8d6ee)) - Ans
- Re-build dist files - ([228c0ac](https://github.com/cfpb/design-system/commit/228c0ac5b0f1ea1962c7ceedfbcf37e65c077ac1)) - Ans

## [3.2.6](https://github.com/cfpb/design-system/compare/v3.2.5..v3.2.6) - October 25, 2024

### PRs in this release

- PR #[2075](https://github.com/cfpb/design-system/pull/2075): Update button groups to use flexbox - Ans

### General

- Update button groups to use flexbox - ([fe857d0](https://github.com/cfpb/design-system/commit/fe857d02fe08a6f3f60d262ebf9ef9c4ed9a0a52)) - Ans
- Move auto-changelog dep to root - ([a2acba5](https://github.com/cfpb/design-system/commit/a2acba58b6bf636d3999e5fcdb9ac6be3b3dc0f8)) - Ans

## [3.2.5](https://github.com/cfpb/design-system/compare/v3.2.4..v3.2.5) - October 23, 2024

### PRs in this release

- PR #[2069](https://github.com/cfpb/design-system/pull/2069): Remove `o-table--entry-header-on-small` class - Ans

### General

- Remove - ([e839bde](https://github.com/cfpb/design-system/commit/e839bde972624c90c36bc58526df71a4e6d0c04a)) - Ans
- Add more `publishConfig` - ([b54c1c1](https://github.com/cfpb/design-system/commit/b54c1c19f8d2d559f428281b8ed1e64a57e41dac)) - Ans

## [3.2.4](https://github.com/cfpb/design-system/compare/v3.2.3..v3.2.4) - October 23, 2024

### General

- Move auto-changelog to package - ([2eb43f2](https://github.com/cfpb/design-system/commit/2eb43f23cc3a8ebaa08da2c01f41fb273c50716e)) - Ans

## [3.2.3](https://github.com/cfpb/design-system/compare/v3.2.2..v3.2.3) - October 16, 2024

### PRs in this release

- PR #[2068](https://github.com/cfpb/design-system/pull/2068): Rename `o-table-wrapper--scrolling` to `o-table--scrolling` - Ans

### General

- Rename `o-table-wrapper--scrolling` to `o-table--scrolling` - ([acded96](https://github.com/cfpb/design-system/commit/acded9655df851d2971b0b8f8da7a5221c065e43)) - Ans

## [3.2.2](https://github.com/cfpb/design-system/compare/v3.2.1..v3.2.2) - September 27, 2024

### PRs in this release

- PR #[2064](https://github.com/cfpb/design-system/pull/2064): Adjust code comments - Ans

### General

- Adjust code comments - ([c31cf40](https://github.com/cfpb/design-system/commit/c31cf40a990abb6e38e96e5a2112f875d4311282)) - Ans
- Build assets - ([35eb3af](https://github.com/cfpb/design-system/commit/35eb3af2e3cd0c7f2a14bd111ed8e0b1392a9238)) - Ans

## [3.2.1](https://github.com/cfpb/design-system/compare/v3.2.0..v3.2.1) - September 27, 2024

### PRs in this release

- PR #[2058](https://github.com/cfpb/design-system/pull/2058): Swap lerna with release-it - Ans
- PR #[2063](https://github.com/cfpb/design-system/pull/2063): Refresh npm cache - Ans

### General

- Swap lerna for release-it - ([3eb955a](https://github.com/cfpb/design-system/commit/3eb955ab4557a8d8efb43d580a39c4e113f55e5d)) - Ans
- Revert to 3.2.0 - ([3f8c3e0](https://github.com/cfpb/design-system/commit/3f8c3e0bc8960f9f816e922cad115983ab2f10b8)) - Ans
- Revert to v3.2.0 - ([1fbc6ac](https://github.com/cfpb/design-system/commit/1fbc6ac8b76664dc2a342fe6224e081f50ac36b9)) - Ans
- Revert to v3.2.0 - ([a676d01](https://github.com/cfpb/design-system/commit/a676d01f243dd6da1c69640010e9f7101590cda5)) - Ans
- Revert to 3.2.0 - ([0222ad1](https://github.com/cfpb/design-system/commit/0222ad1c71bd76f6a8b8a4d9f51b00b5f8be1c5a)) - Ans
- Revert to v3.2.0 - ([abd9903](https://github.com/cfpb/design-system/commit/abd99037e4885bc8c19285d23b1757d088cc5424)) - Ans
- Revert to v3.2.0 - ([f8cf8f1](https://github.com/cfpb/design-system/commit/f8cf8f1a24a530b458583a91870b8841c8b1ff0b)) - Ans
- Revert to v3.2.0 - ([a42322d](https://github.com/cfpb/design-system/commit/a42322d39fb6c7372b2ffc00e0bd025c481e1c6b)) - Ans
- Revert to v3.2.0 - ([9eb2d8c](https://github.com/cfpb/design-system/commit/9eb2d8c3fde5da7e12a9ec5f23a3d958a08eac13)) - Ans

## [3.2.0](https://github.com/cfpb/design-system/compare/v3.1.9..v3.2.0) - September 25, 2024

### PRs in this release

- PR #[2053](https://github.com/cfpb/design-system/pull/2053): More color contrast adjustments | Formatting fixes - Ans
- PR #[2056](https://github.com/cfpb/design-system/pull/2056): Update types/react@18.3.8, concurrently@9.0.1, postcss@8.4.47, sass@179.2, saucectl@0.186.0 - Ans
- PR #[2055](https://github.com/cfpb/design-system/pull/2055): Refactor heading mixins - Ans

### General

- More color contrast adjustments | Formatting fixes - ([f3c95e5](https://github.com/cfpb/design-system/commit/f3c95e5c960bd0fe0c6a640de076428d3f994eca)) - Ans
- Remove redundant abstracts imports - ([57d178b](https://github.com/cfpb/design-system/commit/57d178b24f7acee3a1d704c221c4ff9ed054ec9c)) - Ans
- Refactor heading mixins - ([6f421a6](https://github.com/cfpb/design-system/commit/6f421a6ef6ea17c076fe34db23bdfe855ee71cc4)) - Ans
- V3.2.0 - ([1b92196](https://github.com/cfpb/design-system/commit/1b92196c49399125ce790a1c43e47e02659e3e3e)) - Ans

## [3.1.9](https://github.com/cfpb/design-system/compare/v3.1.8..v3.1.9) - September 12, 2024

### PRs in this release

- PR #[2051](https://github.com/cfpb/design-system/pull/2051): Filter tag tweaks - Ans

### General

- V3.1.8 - ([f7b4d78](https://github.com/cfpb/design-system/commit/f7b4d7854e74fa99e2439c90ea28dc194f70c3cc)) - Ans
- Tweak filter tag layout - ([9c0c1f3](https://github.com/cfpb/design-system/commit/9c0c1f362f41e391f4c416fffec5665029e18858)) - Ans
- Bump version - ([8af1437](https://github.com/cfpb/design-system/commit/8af143793243ce4b08e7be32219a4cb3f6e86ee9)) - Ans
- V3.1.9 - ([b6b39a3](https://github.com/cfpb/design-system/commit/b6b39a3000a8fd8f75f237db1a86d3f3725780f8)) - Ans

## [3.1.8](https://github.com/cfpb/design-system/compare/v3.1.7..v3.1.8) - September 11, 2024

### PRs in this release

- PR #[2049](https://github.com/cfpb/design-system/pull/2049): Replace multiselect tags with filter tags - Ans

### General

- Merge branch 'main' into ans_build - Ans
- Replace multiselect tags with filter tags - ([5052532](https://github.com/cfpb/design-system/commit/505253216946dc9f5c344966d88b38b89a90a92b)) - Ans
- Bump version - ([caa9f2f](https://github.com/cfpb/design-system/commit/caa9f2ffb1f452b547dcfc8410e9aef876ea3ae2)) - Ans
- V3.1.8 - ([ce63bfc](https://github.com/cfpb/design-system/commit/ce63bfcdecf687e9b96ab2420db225649b65db4b)) - Ans

## [3.1.7](https://github.com/cfpb/design-system/compare/v3.1.6..v3.1.7) - September 10, 2024

### PRs in this release

- PR #[2046](https://github.com/cfpb/design-system/pull/2046): Update gap in tags - Ans

### General

- Update gap in tags - ([e6c8fa1](https://github.com/cfpb/design-system/commit/e6c8fa116ab842a83ff7b32f24db8251eb591cfb)) - Ans
- Bump version - ([8f68113](https://github.com/cfpb/design-system/commit/8f68113c89ae1e24550d23c76a1765daac3a1a63)) - Ans
- V3.1.7 - ([4154531](https://github.com/cfpb/design-system/commit/415453147d44ab32977359f985c50a66799818c1)) - Ans

## [3.1.6](https://github.com/cfpb/design-system/compare/v3.1.5..v3.1.6) - September 10, 2024

### PRs in this release

- PR #[2045](https://github.com/cfpb/design-system/pull/2045): Add non-link topic tags - Ans

### General

- Add non-link topic tags - ([f1c3158](https://github.com/cfpb/design-system/commit/f1c3158e739b114d92f83daeb79763af5c781b92)) - Ans
- V3.1.6 - ([59f8344](https://github.com/cfpb/design-system/commit/59f83442c41d4ca6803d22971964dab26efb0ef0)) - Ans

## [3.1.5](https://github.com/cfpb/design-system/compare/v3.1.4..v3.1.5) - September 10, 2024

### PRs in this release

- PR #[2037](https://github.com/cfpb/design-system/pull/2037): Adjust focus rectangle offset for default links, expandables, summaries - Ans
- PR #[2042](https://github.com/cfpb/design-system/pull/2042): Add stacked topic tag group modifier - Ans

### General

- Adds default outline-offset of 1px to focused links - ([5c00dbe](https://github.com/cfpb/design-system/commit/5c00dbefb47b2f8043eab1f94a9d34e23f011867)) - Ans
- Adjust focus rectangle offset - ([3ed54e6](https://github.com/cfpb/design-system/commit/3ed54e6bb0d91615ca42ab71edf3ade33ac7c1ee)) - Ans
- Add stacked topic tag group modifier - ([b89b032](https://github.com/cfpb/design-system/commit/b89b032b0bd5593ceb496e5449d20ed5dc396178)) - Ans
- V3.1.5 - ([37c1b91](https://github.com/cfpb/design-system/commit/37c1b91a345ebaf7098509a05ec1e972cbcd91c3)) - Ans

## [3.1.4](https://github.com/cfpb/design-system/compare/v3.1.3..v3.1.4) - September  5, 2024

### PRs in this release

- PR #[2039](https://github.com/cfpb/design-system/pull/2039): Update index.scss - Ans

### General

- Update index.scss - ([f6ba359](https://github.com/cfpb/design-system/commit/f6ba3598acd1d58c5dff277218055d9ed74b6bd6)) - Ans
- V3.1.4 - ([62179e8](https://github.com/cfpb/design-system/commit/62179e890fdeafb650900377678bde853f0f7a9d)) - Ans

## [3.1.3](https://github.com/cfpb/design-system/compare/v3.1.2..v3.1.3) - September  5, 2024

### PRs in this release

- PR #[2038](https://github.com/cfpb/design-system/pull/2038): Add tag RTL code - Ans

### General

- Add tag RTL code - ([6239902](https://github.com/cfpb/design-system/commit/62399029913e444a8809dd65fff6f1a98e580098)) - Ans
- V3.1.3 - ([072112e](https://github.com/cfpb/design-system/commit/072112ea27fe26d283d6b230de22582c3be09370)) - Ans

## [3.1.2](https://github.com/cfpb/design-system/compare/v3.1.1..v3.1.2) - September  5, 2024

### PRs in this release

- PR #[2027](https://github.com/cfpb/design-system/pull/2027): Remove `$font-size` variable - Ans
- PR #[2036](https://github.com/cfpb/design-system/pull/2036): Adjust tags outline and coloring - Ans

### General

- Remove $font-size variable - ([de3bc6a](https://github.com/cfpb/design-system/commit/de3bc6a7b8e58374483509ffcef2328c5e9a4baa)) - Ans
- Adjust tags outline and coloring - ([843ced7](https://github.com/cfpb/design-system/commit/843ced766cfa3930574c45bd70f19f272508a415)) - Ans
- Bump version - ([647e344](https://github.com/cfpb/design-system/commit/647e34496e3958aacef027ba35c3e3069e59772f)) - Ans
- V3.1.2 - ([def4f44](https://github.com/cfpb/design-system/commit/def4f440c6e4df31e9c9001a3630e14011c2c840)) - Ans

## [3.1.1](https://github.com/cfpb/design-system/compare/v3.1.0..v3.1.1) - September  4, 2024

### PRs in this release

- PR #[2035](https://github.com/cfpb/design-system/pull/2035): Update types/react, decap-cms-app, cypress, postcss, sass, saucectl, stylelint - Ans
- PR #[2034](https://github.com/cfpb/design-system/pull/2034): Update accordion BEM fix - Ans

### General

- Update accordion BEM fix - ([13dd557](https://github.com/cfpb/design-system/commit/13dd557463a7d62e9ba09c6fb5e833be2e9f5d22)) - Ans
- Update types/react, decap-cms-app, cypress, postcss, sass, saucectl, stylelint - ([7dcaaf2](https://github.com/cfpb/design-system/commit/7dcaaf2a7c4ef72ef9aa8d1e5556993e79db3514)) - Ans
- Merge branch 'main' into ans_accordion_bem - Ans
- Bump version - ([5faa23f](https://github.com/cfpb/design-system/commit/5faa23fcf2f8b3e49bfc8ae88d9a3326073ba08a)) - Ans
- V3.1.1 - ([6d08f67](https://github.com/cfpb/design-system/commit/6d08f674140b371f4c5eb6cfa1837320f5350fb9)) - Ans

## [3.1.0](https://github.com/cfpb/design-system/compare/v3.0.3..v3.1.0) - September  4, 2024

### PRs in this release

- PR #[2031](https://github.com/cfpb/design-system/pull/2031): Add topic tags | Re-arrange links page | Adjust sass imports - Ans

### General

- Add topic tags | Re-arrange links page | Adjust sass imports - ([6074735](https://github.com/cfpb/design-system/commit/60747356f5ee271e1e551651e5b5b19b919900e0)) - Ans
- Adjust topic tag underlining - ([c1b2d19](https://github.com/cfpb/design-system/commit/c1b2d191299c385d4df8d9d2ef96b6f50bc39db2)) - Ans
- Add topic tag bullet class - ([d187f9c](https://github.com/cfpb/design-system/commit/d187f9c35debfcc5e5332ba64392a816a6e345fb)) - Ans
- Break long words at small screen sizes - ([f522017](https://github.com/cfpb/design-system/commit/f522017aedbd62eb840f4d8670f9a3157926e728)) - Ans
- Bump version - ([a5d1c70](https://github.com/cfpb/design-system/commit/a5d1c709bc5f79e229859729fe085e8730264a61)) - Ans
- V3.1.0 - ([95e0718](https://github.com/cfpb/design-system/commit/95e07185441126cf0376f28f49180a77168ee413)) - Ans

## [3.0.3](https://github.com/cfpb/design-system/compare/v3.0.2..v3.0.3) - August 22, 2024

### PRs in this release

- PR #[2026](https://github.com/cfpb/design-system/pull/2026): Tags: Add initial tag styling - Ans
- PR #[2029](https://github.com/cfpb/design-system/pull/2029): Fix malformed line-height - Ans
- PR #[2028](https://github.com/cfpb/design-system/pull/2028): Linter autofixes - Ans

### General

- Add initial tag styling - ([68883eb](https://github.com/cfpb/design-system/commit/68883ebda6bedba02b3a86f17497d22f635e9d4d)) - Ans
- Update tags to regular weight - ([cad141f](https://github.com/cfpb/design-system/commit/cad141f577a923d7ad368d3594f21ae18a7bf5e1)) - Ans
- Fix malformed line-height - ([a902e01](https://github.com/cfpb/design-system/commit/a902e019bb6731d749230b40b08dd57e237206b6)) - Ans
- Autofix linter - ([600f799](https://github.com/cfpb/design-system/commit/600f799b54aaea34ba20644571d26808e074ccf6)) - Ans
- Bump version - ([8822087](https://github.com/cfpb/design-system/commit/8822087c8b24f8d2edfd9ae56064a893122983d9)) - Ans
- V3.0.3 - ([85b594f](https://github.com/cfpb/design-system/commit/85b594f98ad76a7bfcfd8576b9fcb82f89dd1c56)) - Ans

## [3.0.2](https://github.com/cfpb/design-system/compare/v3.0.1..v3.0.2) - August 21, 2024

### PRs in this release

- PR #[2024](https://github.com/cfpb/design-system/pull/2024): FCM: Unquote padding-bottom value in video-playing class - Ans

### General

- Unquote padding-bottom value in video-playing class - ([0972a29](https://github.com/cfpb/design-system/commit/0972a292720d5edb04c2c17e1ca5ad5ca38a5e74)) - Ans
- V3.0.2 - ([f01daeb](https://github.com/cfpb/design-system/commit/f01daeba6c0204356ed86358d51a0f25e4af9159)) - Ans

## [3.0.1](https://github.com/cfpb/design-system/compare/v3.0.0..v3.0.1) - August 16, 2024

### PRs in this release

- PR #[2022](https://github.com/cfpb/design-system/pull/2022): Create root package index.scss - Ans

### General

- Create root package index.scss - ([b4ae5d0](https://github.com/cfpb/design-system/commit/b4ae5d08c7bee7f09ef478743038b02e7bb4d55d)) - Ans
- V3.0.1 - ([dbcf5b3](https://github.com/cfpb/design-system/commit/dbcf5b3bcc5b64fa7760011f05c7d7fa8517406a)) - Ans

## [3.0.0] - August 16, 2024

### PRs in this release

- PR #[2005](https://github.com/cfpb/design-system/pull/2005): Consolidate packages into cfpb-design-system - Ans
- PR #[2014](https://github.com/cfpb/design-system/pull/2014): Update banner color scheme - Ans
- PR #[2016](https://github.com/cfpb/design-system/pull/2016): Add script to decap preview - Ans
- PR #[2017](https://github.com/cfpb/design-system/pull/2017): Add base index file | Remove less file - Ans
- PR #[2018](https://github.com/cfpb/design-system/pull/2018): Remove default export - Ans
- PR #[2019](https://github.com/cfpb/design-system/pull/2019): Pre-v3 prep - Ans
- PR #[2020](https://github.com/cfpb/design-system/pull/2020): Update decap-cms-app@3.3.2, saucectl@0.183.0, stylelint@16.8.2, cypress@13.13.3, esbuild@0.23.1 - Ans

### General

- Consolidate packages into cfpb-design-system - ([eb63aba](https://github.com/cfpb/design-system/commit/eb63aba9edccaff1cb5739212b1dac7fa7c1be89)) - Ans
- Move some button and layout vars to the abstracts vars - ([434262e](https://github.com/cfpb/design-system/commit/434262eba8f0ac35f66fa6fd4d2cdaa065747e37)) - Ans
- Update banner color scheme - ([440ab7e](https://github.com/cfpb/design-system/commit/440ab7eab5b23082a6fd665fe246e86c0c9dcdbb)) - Ans
- Add script to decap preview - ([af903c9](https://github.com/cfpb/design-system/commit/af903c9180da5a6668c6943ef46ffd509f836912)) - Ans
- Add base index file | Remove less file - ([406e73e](https://github.com/cfpb/design-system/commit/406e73eb478053b53d6b2ba26870b50d2e6b9d69)) - Ans
- Remove default export - ([44c6a64](https://github.com/cfpb/design-system/commit/44c6a64252454aeba5ed1a7a9cb9985dfab7c949)) - Ans
- Remove underscore named files | Move custom props to mixin | Move some vars to global space - ([20b9076](https://github.com/cfpb/design-system/commit/20b9076365f4f19617ddaf78544af089ddf7d042)) - Ans
- Update decap-cms-app@3.3.2, saucectl@0.183.0, stylelint@16.8.2, cypress@13.13.3 - ([8c095fd](https://github.com/cfpb/design-system/commit/8c095fd73576729451d7ea285dd965528502b04a)) - Ans
- V3.0.0 - ([5810e39](https://github.com/cfpb/design-system/commit/5810e39c705e77c043124b0cebbb0aa370fe4116)) - Ans


