import {Table} from 'antd'

const columns = [
    {
        title: 'Long URL',
        dataIndex: 'longUrl',
        key: `longUrl`,
        render: text => <p>{text}</p>,
    },
    {
        title: 'Short URL',
        dataIndex: 'shortUrl',
        key: 'shortUrl',
        render: text => <p>{text}</p>,
    }
]

export const DataSection = ({data}) => {

    return(
        <div className="table-container">
            <Table
                columns={columns}
                dataSource={data}
                style={{ width: "70%" }}
                rowKey="longUrl"
            />
        </div>
    )
}