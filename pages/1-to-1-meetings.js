import { Table } from 'antd';
import oneToOneData from 'utils/1-1-meeting-data';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '30%',
  },
  {
    title: 'LinkedIn Profile',
    dataIndex: 'profile',
    render: (_, rowData) => {
        return <a target="_blank" href={rowData.profile}> LinkedIn Profile </a>
    }
  },
  {
    title: 'Date',
    dataIndex: 'date',
    width: '40%',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const OneToOneMeeting = () => {
    return(
        <div className="page-wrapper">
            <Table columns={columns} dataSource={oneToOneData} onChange={onChange} />
        </div>
    );
}
export default OneToOneMeeting;
