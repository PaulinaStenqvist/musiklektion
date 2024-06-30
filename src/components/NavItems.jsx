export const navItems = [
  {
    id: 1,
    title: 'Hem',
    path: './',
    cName: 'nav-item',
  },
  {
    id: 2,
    title: 'Dokument',
    path: './document',
    cName: 'nav-item',
    dropdownItems: [
      {
        id: 1,
        title: 'Mellanstadiet',
        path: './mellanstadiet',
        cName: 'submenu-item',
      },
      {
        id: 2,
        title: 'Högstadiet',
        path: './hogstadiet',
        cName: 'submenu-item', // fixed typo in path
      },
      {
        id: 3,
        title: 'Övrigt',
        path: './ovrigt',
        cName: 'submenu-item',
      },
    ],
  },
  {
    id: 3,
    title: 'Låtar',
    path: './latar',
    cName: 'nav-item',
  },
  {
    id: 4,
    title: 'Uppgifter',
    path: './uppgifter',
    cName: 'nav-item',
  },
];
