import IconChevronDoubleDown from 'mdi-material-ui/ChevronDoubleDown';
import IconEraser from 'mdi-material-ui/Eraser';
import IconFolderNetwork from 'mdi-material-ui/FolderNetwork';
import IconFormatColorText from 'mdi-material-ui/FormatColorText';
import IconGithubCircle from 'mdi-material-ui/GithubCircle';
import IconMaterialUi from 'mdi-material-ui/MaterialUi';
import IconNetworkOffOutline from 'mdi-material-ui/NetworkOffOutline';
import React from 'react';

export default {
  app: {
    name: 'colostate-ricro-ui template',
    hasAutoLogin: true,
    nav: [
      [
        {
          name: 'Nav Group 1',
          icon: <IconFormatColorText />,
          link: '/lg-1',
        },
        {
          name: 'Nav Item - No Icon',
          link: '/closeable-dialog',
        },
      ],
      [
        {
          name: 'Nav Group 2',
          icon: <IconFormatColorText />,
          link: '/lg-2',
        },
        {
          name: 'Example Dropdown (Level 0)',
          icon: <IconChevronDoubleDown />,
          link: '/ex-drop',
          subNav: [
            [
              {
                name: 'Level 1',
                icon: <IconFolderNetwork />,
                link: '/level-1',
                subNav: [
                  [
                    {
                      name: 'Level 2 - Section 1 - 1',
                      link: '/l2-s1-1',
                    },
                    {
                      name: 'Level 2 - Section 1 - 2',
                      icon: <IconNetworkOffOutline />,
                      link: '/l2-s1-2',
                    },
                  ],
                  [
                    {
                      name: 'Level 2 - Section 2',
                      icon: <IconEraser />,
                      link: '/l2-s2',
                    },
                  ],
                ],
              },
            ],
            [
              {
                name: 'Level 1 - Section 2',
                icon: <IconEraser />,
                link: '/l1-s2',
              },
            ],
          ],
        },
      ],
      [
        {
          name: 'GitHub Repo',
          icon: <IconGithubCircle />,
          link: 'https://github.com/csu-ricro/colostate-ricro-scripts',
        },
        {
          name: 'Material UI',
          icon: <IconMaterialUi />,
          link: 'https://material-ui.com/',
        },
      ],
    ],
  },
  // defaultState: { user },
};
