import {
  Container,
  LabelInput,
  Titulo,
  ListaProduto,
  Modal,
  Button,
} from '../../components';
import { DispositivosStyled } from './Dispositivos.styles';
import { useEffect, useState } from 'react';
import { getDevices, getLocals, addDevices } from '../../utils/api';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer } from 'react-toastify';

export const Dispositivos = () => {
  const [devices, setDevices] = useState([]);
  const [locals, setLocals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchDevice, setSearchDevice] = useState([]);
  const [deviceSelected, setDeviceSelected] = useState('');

  const campoObrigatorio = 'Campo obrigatório';

  const abreModal = (device) => {
    setDeviceSelected(device);
  };

  const userId = JSON.parse(localStorage.getItem('user'));

  const addDevice = (values) => {
    (async () => {
      const response = await addDevices(
        userId.id,
        deviceSelected._id,
        false,
        values.local,
        values.comodo,
      );
      if (response.data.error) {
        console.log(response.data.error);
        return;
      }
      setLoading(false);
      setDeviceSelected(false);
    })();
  };

  useEffect(() => {
    (async () => {
      const response = await getDevices();
      setDevices(response.data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getLocals();
      setLocals(response.data);
      setLoading(false);
    })();
  }, []);

  const formSchema = yup.object({
    local: yup.string().required(campoObrigatorio),
    comodo: yup.string().required(campoObrigatorio),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });

  const filteredDevices =
    searchDevice.length > 0
      ? devices.filter((device) =>
          device.name.toUpperCase().includes(searchDevice.toUpperCase()),
        )
      : [];

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <Container>
        <DispositivosStyled>
          <Titulo>Dispositivos</Titulo>
          <hr></hr>
          <LabelInput>
            <label htmlFor="nomeDispositivo">Nome do dispositivo</label>
            <input
              type="text"
              id="nomeDispositivo"
              placeholder="Buscar pelo nome do dispositivo"
              onChange={(e) => setSearchDevice(e.target.value)}
              name="search"
            />
          </LabelInput>
          {searchDevice.length > 0 ? (
            <ListaProduto devices={filteredDevices} abreModal={abreModal} />
          ) : (
            <ListaProduto devices={devices} abreModal={abreModal} />
          )}
        </DispositivosStyled>

        <Modal
          isOpen={Boolean(deviceSelected)}
          close={() => setDeviceSelected(false)}
        >
          <h4>{deviceSelected.name}</h4>
          <form onSubmit={handleSubmit(addDevice)}>
            <LabelInput>
              <select
                id="localsSelect"
                {...register('local')}
                defaultValue="Casa"
              >
                <option value="DEFAULT" disabled selected>
                  Selecione o local do dispositivo
                </option>
                {locals.map((local) => (
                  <option
                    key={local._id}
                    value={local._id}
                    defaultValue={local._id}
                  >
                    {local.description}
                  </option>
                ))}
              </select>
              {formState.errors.local && (
                <span>{formState.errors.local.message}</span>
              )}
            </LabelInput>
            <LabelInput>
              <input {...register('comodo')} type="text" id="comodo"></input>
              {formState.errors.comodo && (
                <span>{formState.errors.comodo.message}</span>
              )}
            </LabelInput>
            <Button onClick={addDevice}>Confirmar</Button>
          </form>
        </Modal>
      </Container>
      <ToastContainer />
    </>
  );
};
