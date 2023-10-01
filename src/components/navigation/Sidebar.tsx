import { Button, Center, Stack, useMantineColorScheme } from '@mantine/core';
import { IconArrowsJoin, IconMoon, IconPlus, IconSun } from '@tabler/icons-react';

import useModal from '../../hooks/useModal';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const createServerModal = useModal('CreateServer');

  return (
    <nav className={classes.navbar}>
      <Center>
        <Button
          className={classes.link}
          variant='subtle'
          radius={100}
          onClick={createServerModal.openModal}>
          <IconPlus radius={100} />
        </Button>
      </Center>
      <Center>
        <Button
          className={classes.link}
          variant='subtle'
          radius={100}
          onClick={() => {}}>
          <IconArrowsJoin radius={100} />
        </Button>
      </Center>
      <Stack
        justify='center'
        align='center'>
        <Button
          className={classes.link}
          variant='subtle'
          radius={100}
          onClick={toggleColorScheme}>
          {colorScheme === 'dark' ? <IconMoon radius={100} /> : <IconSun radius={100} />}
        </Button>
      </Stack>
    </nav>
  );
};

export default Sidebar;
