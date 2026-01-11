import {
  Communication,
  Editor,
  Feedback,
  Files,
  General,
  Interaction,
  Media,
  Time,
  Users,
  Logo,
} from '@sopt-makers/icons';

// icon 카테고리 추가시 이곳에 추가
const iconCategories = [
  { name: 'Communication', icons: Communication },
  { name: 'Editor', icons: Editor },
  { name: 'Feedback', icons: Feedback },
  { name: 'Files', icons: Files },
  { name: 'General', icons: General },
  { name: 'Interaction', icons: Interaction },
  { name: 'Media', icons: Media },
  { name: 'Time', icons: Time },
  { name: 'Users', icons: Users },
  { name: 'Logo', icons: Logo },
];

const convertIconNameToKebabCase = (iconName: string): string => {
  const withoutIconPrefix = iconName.replace(/^Icon/, '');

  return withoutIconPrefix
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
};

const IconGenerator = ({
  IconComponent,
  style,
  iconName,
}: {
  IconComponent: React.ComponentType<React.HTMLAttributes<SVGSVGElement>>;
  style: React.CSSProperties;
  iconName: string;
}) => {
  return (
    <div>
      <IconComponent style={style} />
      <p>{convertIconNameToKebabCase(iconName)}</p>
    </div>
  );
};

export const Default = {
  argTypes: {
    color: { control: 'color' },
  },
  render: (props: { color: string }) => {
    const style = { width: 24, height: 24, color: props.color };

    return (
      <div className='icons-wrap'>
        {iconCategories.map((category) => (
          <div key={category.name} className='icons-group'>
            <h4>{category.name}</h4>
            {Object.entries(category.icons).map(([iconName, icon]) => (
              <IconGenerator
                IconComponent={icon}
                style={style}
                key={`${category.name}-${iconName}`}
                iconName={iconName}
              />
            ))}
          </div>
        ))}
      </div>
    );
  },
};

export default {
  title: 'icons/Icons',
  component: Default,
};
