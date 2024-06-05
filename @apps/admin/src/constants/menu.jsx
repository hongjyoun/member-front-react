import { MdOutlinePortrait, MdOutlinePublic, MdManageSearch, MdOutlineFolder } from 'react-icons/md';
import { MANAGE_CENTER, MANAGE_EMPLOYEE, MANAGE_MEMBER } from '@/routes/ManageRoutes';

export const menuItems = [
  {
    key: 'manage-employee',
    label: '도움/직원',
    icon: <MdOutlinePortrait size={24} color="outlined"/>,
    children: MANAGE_EMPLOYEE.filter(v=>v.visible).map((v, i) => ({ key: `manage-employee-${i}`, label: v.label, path: v.path })),
  },
  {
    key: 'manage-member',
    label: '회원',
    icon: <MdManageSearch size={24}/>,
    children: MANAGE_MEMBER.filter(v=>v.visible).map((v, i) => ({ key: `manage-member-${i}`, label: v.label, path: v.path })),
  },
  {
    key: 'manage-center',
    label: '센터/조직',
    icon: <MdOutlinePublic size={24}/>,
    children: MANAGE_CENTER.filter(v=>v.visible).map((v, i) => ({ key: `manage-center-${i}`, label: v.label, path: v.path })),
  },
  {
    key: 'manage-notice',
    label: '공문',
    icon: <MdOutlineFolder size={24}/>,
    children: [
      { key: 'manage-notice-1', label: '공문 목록' },
      { key: 'manage-notice-2', label: '공문 작성' },
      { key: 'manage-notice-3', label: '행정자료실' },
      { key: 'manage-notice-4', label: '행정자료 작성' },
    ],
  }
];