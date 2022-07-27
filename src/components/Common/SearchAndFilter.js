import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.module.css';

const SearchAndFilter = () => {
  return (
    <div style={{ width: '30%', display: 'flex', alignItems: 'center', gap: 12 }}>
      <Input
        size="large"
        style={{ border: 'none', borderRadius: 20 }}
        prefix={<SearchOutlined className={styles.searchIcon} />}
      />
      <img src="/icons/filter.png" alt="" style={{ height: 35 }} />
    </div>
  );
};

export default SearchAndFilter;
