import { Card, Typography } from '@material-tailwind/react';

enum Status {
  PREPARATION = 'PREPARATION',
  SHIPPED = 'SHIPPED',
  TRANSFERT = 'TRANSFERT',
  CENTRE = 'CENTRE',
  RECEIVED_WILAYA = 'RECEIVED_WILAYA',
  WAITING_CUSTOMER = 'WAITING_CUSTOMER',
  DELIVERED = 'DELIVERED',
}

const TABLE_HEAD = ['Date', 'Status', 'Position', 'Location'];

const TABLE_ROWS = [
  {
    position: 'John Michael',
    status: Status.CENTRE,
    date: '23/04/18',
    location: 'Jijel',
  },
  {
    position: 'Alexa Liras',
    status: Status.DELIVERED,
    date: '23/04/18',
    location: 'Jijel',
  },
  {
    position: 'Laurent Perrier',
    status: Status.PREPARATION,
    date: '19/09/17',
    location: 'Jijel',
  },
  {
    position: 'Michael Levi',
    status: Status.RECEIVED_WILAYA,
    date: '24/12/08',
    location: 'Jijel',
  },
  {
    position: 'Richard Gran',
    status: Status.SHIPPED,
    date: '04/10/21',
    location: 'Jijel',
  },
];

export default function TrackingTable() {
  return (
    <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-primary-500 p-4 text-white"
              >
                <Typography
                  variant="small"
                  className="leading-none text-white font-semibold"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ date, status, position, location }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

            return (
              <tr key={date}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {status}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {position}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {location}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
