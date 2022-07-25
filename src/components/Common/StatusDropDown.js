import { Divider } from 'antd';
import ColorRound from './ColorRound';

const DropDown = ({ setFilter, setHideDropDown, hideDropDown, statusArr }) => {
  return (
    <div
      onMouseLeave={() => setHideDropDown(true)}
      style={{
        padding: 10,
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 15,
        cursor: 'pointer',
      }}
    >
      {hideDropDown && (
        <style>
          {`.ant-table-filter-dropdown{
    display: none
  }`}
        </style>
      )}
      {statusArr?.map((item, index) => (
        <>
          <div
            key={index}
            onClick={() => setFilter(item.text)}
            style={{ display: 'flex', alignItems: 'center', gap: 5 }}
          >
            <ColorRound color={item.color} />
            <p className="mbZero">{item.text}</p>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default DropDown;
