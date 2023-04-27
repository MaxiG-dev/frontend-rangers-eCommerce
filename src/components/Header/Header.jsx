import { Link } from 'react-router-dom';
import { Space, Cascader, Input, Button, Avatar, Popover } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useSigninStore } from '../../store/signin';
import styles from './Header.module.css';

const handlerFunctions = {
  categories: () => {},
  toggleSignin: () => {},
  setDefaultTab: () => {},
};

const categoriesRender = (labels) => labels[labels.length - 1];

const categoriesFilter = (inputValue, path) =>
  path.some(
    (option) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );

const { Search } = Input;

const categories = [
  {
    value: 'Tecnología',
    label: 'Tecnología',
  },
  {
    value: 'Indumentaria',
    label: 'Indumentaria',
    children: [
      {
        value: 'Invierno',
        label: 'Invierno',
        children: [
          {
            value: 'Camperas',
            label: 'Camperas',
          },
          {
            value: 'Pantalones',
            label: 'Pantalones',
          },
          {
            value: 'Gorras',
            label: 'Gorras',
          },
        ],
      },
      {
        value: 'Verano',
        label: 'Verano',
        children: [
          {
            value: 'Remeras',
            label: 'Remeras',
          },
          {
            value: 'Shorts',
            label: 'Shorts',
          },
        ],
      },
    ],
  },
];

const contentUser = (
  <Space direction='vertical' style={{ width: '100%' }}>
    <Button type='primary' block onClick={() => {
      handlerFunctions.setDefaultTab('login')
      handlerFunctions.toggleSignin()
    }}>
      Sign in
    </Button>
    <Button block type='text' onClick={() => {
      handlerFunctions.setDefaultTab('register')
      handlerFunctions.toggleSignin()
    }}>Not have an account? register now</Button>
  </Space>
);

export const Header = () => {
  handlerFunctions.setDefaultTab = useSigninStore((state) => state.setDefaultTab);
  handlerFunctions.toggleSignin = useSigninStore((state) => state.toggleSignin);
  return (
    <Space align='center' className={styles.space}>
      <div>
        <Link to='/'>
          <Button type='text'>
            <HomeOutlined /> Rangers
          </Button>
        </Link>
        <Cascader
          options={categories}
          expandTrigger='hover'
          displayRender={categoriesRender}
          placeholder='Categories'
          showSearch={{
            categoriesFilter,
          }}
        />
      </div>
      <Search
        placeholder='Search amazing products...'
        allowClear
        onSearch={() => alert('fetch products and render list')}
      />
      <div>
        <Popover content={contentUser} title='' trigger='hover'>
          <Space>
            <Avatar icon={<UserOutlined />} />
            <span className={styles.userSpan}>
              <p>Welcome</p>
              <p>Login or register now!</p>
            </span>
          </Space>
        </Popover>
      </div>
    </Space>
  );
};
