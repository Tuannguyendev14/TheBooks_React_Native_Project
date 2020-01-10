import Icon1 from 'react-native-vector-icons/thebook-appicon';

export async function prepareIcons() {
  const icons = await Promise.all([
    Icon1.getImageSource('ic-like', 25),
    Icon1.getImageSource('ic-like', 25),
    Icon1.getImageSource('ic-like', 25),
    Icon1.getImageSource('ic-like', 25),
    Icon1.getImageSource('ic-like', 25),
  ]);

  const [first, second, third, four, final] = icons;
  return {first, second, third, four, final};
}
export default prepareIcons;
