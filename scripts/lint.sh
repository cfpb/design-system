## Run prettier. See ignored path in .prettierignore.
yarn prettier "{docs,packages}/**/*.{js,jsx,ts,tsx,json,md}" --write

## Run JS linting. See ignored path in .eslintignore.
yarn eslint ./{docs,packages} --fix

## Run CSS linting. See ignored path in .stylelintignore.
yarn stylelint "{docs,packages}/**/*.{css,less}" --fix
