import { MdDashboard, MdDelete, MdManageSearch, MdOutlineFavorite } from 'react-icons/md';

export const sideMenus = [
  { name: 'Dashboard', icon: MdDashboard, path: '/dashboard' },
  { name: 'Search', icon: MdManageSearch, path: '/search-members' },
  { name: 'Favorite', icon: MdOutlineFavorite, path: '/dashboard' },
  { name: 'Deleted', icon: MdDelete, path: '/dashboard' },
]