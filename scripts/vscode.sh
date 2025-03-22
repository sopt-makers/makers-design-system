if [ -s ${HOME}/.nvm/nvm.sh ]; then
    . ${HOME}/.nvm/nvm.sh
fi

pnpm install

if [ ! -d "packages/ui/dist" ]; then
    pnpm build:ui
fi

if [ ! -d "packages/icons/dist" ]; then
    pnpm build:icon
fi

if [ ! -d "packages/fonts/dist" ]; then
    pnpm build:font
fi

if [ ! -d "packages/colors/dist" ]; then
    pnpm build:color
fi

pnpm test


