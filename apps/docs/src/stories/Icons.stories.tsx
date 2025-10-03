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

const convertIconNameToKebabCase = (iconName: string): string => {
  const withoutIcon = iconName.replace(/^Icon/, '');

  return withoutIcon
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconGenerator = ({ icon, style }: { icon: any; style: React.CSSProperties }) => {
  const IconComponent = icon;
  const iconName = convertIconNameToKebabCase(icon.__docgenInfo.displayName);

  return (
    <div>
      <IconComponent style={style} />
      <p>{iconName}</p>
    </div>
  );
};

export const Default = {
  argTypes: {
    color: { control: 'color' },
  },
  render: (props: { color: string }) => {
    const style = { width: 24, height: 24, color: props.color };

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

    return (
      <div className='icons-wrap'>
        {iconCategories.map((category) => (
          <div key={category.name} className='icons-group'>
            <h4>{category.name}</h4>
            {Object.values(category.icons).map((icon, index) => (
              <IconGenerator icon={icon} style={style} key={`${category.name}-${index}`} />
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
