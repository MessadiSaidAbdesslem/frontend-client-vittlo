import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import FloatingShield from '../assets/lottie/floating-shield.json';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="flex items-center flex-col">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container mt-8 flex flex-row items-center justify-around"
      >
        <div className="w-1/2">
          <p className="lg:text-[56px] sm:text-[48px] font-semibold text-gray-800">
            Welcome to Vittlo
          </p>
          <p className="lg:text-3xl sm:text-2xl text-gray-600">
            Your Ultimate delivery service
          </p>
          <div>
            <Link to={'/tracking'}>
              <Button className="bg-primary-500 mt-4 normal-case hover:shadow-primary-500/25 mr-4 ">
                Track your order
              </Button>
            </Link>
            <Button className="border-primary-500 bg-transparent text-primary-500 border mt-4 normal-case hover:shadow-primary-500/25">
              Learn More
            </Button>
          </div>
        </div>
        <div className="w-1/2 max-w-md flex justify-center items-center">
          <Lottie animationData={FloatingShield as unknown}></Lottie>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container flex mt-20 items-center justify-center flex-col mb-12"
      >
        <p className="font-semibold text-gray-800 text-5xl mb-4">
          Our solutions
        </p>
        <p className="text-gray-600 text-xl">
          We provide you with inovative solutions for your security
        </p>
        <div className="flex justify-around">
          <Card className="w-1/4 sm:w-1/3">
            <CardHeader floated={false} shadow={false} color="transparent">
              <p className="font-semibold pt-2 text-xl"> Web Solution</p>
            </CardHeader>
            <CardBody>
              <div className="px-6">
                <ul className="sm:text-sm lg:text-[16px]">
                  <li className="list-item marker:text-primary-500 marker:text-2xl list-disc ">
                    <span className="underline font-semibold">
                      Script Submission:
                    </span>{' '}
                    Easily upload your PowerShell scripts to our secure web
                    portal for immediate analysis.
                  </li>
                  <li className="list-item marker:text-primary-500 marker:text-2xl list-disc ">
                    <span className="underline font-semibold">
                      Malicious Detection:
                    </span>{' '}
                    employing machine learning and behavioral analysis to
                    identify potential threats.
                  </li>
                  <li className="list-item marker:text-primary-500 marker:text-2xl list-disc ">
                    <span className="underline font-semibold">
                      Comprehensive Reports:
                    </span>{' '}
                    Receive detailed reports highlighting any suspicious or
                    malicious elements found within your scripts.
                  </li>
                </ul>
              </div>
            </CardBody>
            <CardFooter divider>
              <Link to={'/home'}>
                <Button
                  size="lg"
                  className="normal-case bg-primary-500"
                  ripple={false}
                  fullWidth={true}
                >
                  Submit Right Now!
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-1/4 sm:w-1/3 h-min">
            <CardHeader floated={false} shadow={false} color="transparent">
              <p className="font-semibold pt-2 text-xl">
                Event Logger Solution
              </p>
            </CardHeader>
            <CardBody>
              <div className="px-6">
                <ul className="sm:text-sm lg:text-[16px]">
                  <li className="list-item marker:text-primary-500 marker:text-2xl list-disc ">
                    <span className="underline font-semibold">
                      Real-time Monitoring:
                    </span>{' '}
                    PowerDefender Event Logger monitors script execution
                    activities, providing instant alerts and notifications for
                    any suspicious or malicious behavior.
                  </li>
                  <li className="list-item marker:text-primary-500 marker:text-2xl list-disc ">
                    <span className="underline font-semibold">
                      Centralized Event Logging:
                    </span>{' '}
                    All script execution events are logged centrally, enabling
                    easy auditing, analysis, and forensic investigations.
                  </li>
                </ul>
              </div>
            </CardBody>
            <CardFooter divider>
              <Link to={'/download'}>
                <Button
                  size="lg"
                  className="normal-case bg-primary-500"
                  ripple={false}
                  fullWidth={true}
                >
                  Download Event Logger!
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
