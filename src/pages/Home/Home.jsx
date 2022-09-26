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

  const [deviceSelected, setDeviceSelected] = useState(null);

  const userId = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    (async () => {
      const response = await getUsersDevices(userId.id);
      if (response.data.error) {
        console.log(response.data.error);
        return;
      }
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
        <h1>.</h1>
      </Modal>
    </Container>
  );
};
