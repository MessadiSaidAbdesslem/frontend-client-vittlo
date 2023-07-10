import React from 'react';
import { Card, CardBody, Input, Button } from '@material-tailwind/react';
import TrackingTable from '../components/TrackingTable';

const Tracking = () => {
  return (
    <>
      <Card className="lg:mx-64 mt-8 sm:mx-32 border border-gray-300">
        <CardBody className="bg-gray-100 text-gray-900 font-extrabold text-xl rounded-xl rounded-b-none border border-gray-300 px-5 py-2 border-t-0 border-l-0 border-r-0">
          Track a package
        </CardBody>
        <CardBody>
          <p className="text-gray-800 font-medium mb-4">Tracking serial code</p>
          <div className="flex">
            <Input placeholder="VIT-XXXXXXXX" variant="outlined" />
            <Button className="normal-case w-64 ml-5 rounded-md font-thin">
              Display Tracking
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className="lg:mx-64 mt-8 sm:mx-32 border border-gray-300">
        <CardBody className="bg-gray-100 text-gray-900 font-extrabold text-xl rounded-xl rounded-b-none border border-gray-300 px-5 py-2 border-t-0 border-l-0 border-r-0">
          Tracking of package: VIT-46ZFHL
        </CardBody>
        <CardBody className="px-4 py-6">
          <TrackingTable />
        </CardBody>
      </Card>
    </>
  );
};

export default Tracking;
