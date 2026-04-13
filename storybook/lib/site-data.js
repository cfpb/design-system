import navigationSource from '../../docs/_data/side-navigation.yml?raw';
import { parseNavigationTree } from './navigation';

export const navigationTree = parseNavigationTree(navigationSource);
