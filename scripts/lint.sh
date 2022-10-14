yarn prettier "{docs,packages}/{!_site,**}/*.{js,jsx,ts,tsx,json,md}" --write
yarn eslint ./{docs,packages} --fix
#yarn stylelint \"!docs/_site {docs,packages}/**/*.{css,less}\" --fix