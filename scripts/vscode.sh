if [ -s ${HOME}/.nvm/nvm.sh ]; then
    . ${HOME}/.nvm/nvm.sh
fi

pnpm install

packages=("ui" "icons" "fonts" "colors")

for pkg in ${packages[@]}; do
    if [ ! -d "packages/${pkg}/dist" ]; then
        pnpm build:${pkg}
    fi
done

pnpm test


