import { useEffect, useState } from 'react';
import { Container, Modal, ListaCardDevice } from '../../components';

import { getUsersDevices } from '../../utils/api';

import {
  WheaterStyled,
  FiltroStyled,
  ListaDispositivosStyled,
} from './Home.styles';

export const Home = () => {
  const [devices, setDevices] = useState();
  const [loading, setLoading] = useState(true);
  const userId = JSON.parse(localStorage.getItem('user'));

  const [deviceSelected, setDeviceSelected] = useState('');

  useEffect(() => {
    (async () => {
      const response = await getUsersDevices(userId.id);
      setDevices(response.data);
      setLoading(false);
    })();
  }, [userId.id]);

  const abreModal = (device) => {
    setDeviceSelected(device);
  };

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <WheaterStyled>
        <h1>Wheater</h1>
      </WheaterStyled>
      <FiltroStyled>
        <h3>Todos</h3>
        <h3>Casa</h3>
        <h3>Escritório</h3>
        <h3>Fábrica</h3>
      </FiltroStyled>
      <ListaDispositivosStyled>
        <ListaCardDevice
          devices={devices}
          abreModal={abreModal}
        ></ListaCardDevice>
      </ListaDispositivosStyled>

      <Modal
        isOpen={Boolean(deviceSelected)}
        close={() => setDeviceSelected(false)}
      >
        {console.log(deviceSelected)}
        <h1>teste</h1>
        <h4>{deviceSelected.device.name}</h4>
      </Modal>
    </Container>
  );
};
