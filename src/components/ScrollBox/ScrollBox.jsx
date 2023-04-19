import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const BoxLeft = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="block-box-left">
        <br></br>
        <h3>
          <strong>Values behind Elegant Builders</strong>
        </h3>
        <br></br>
        <p>
          Starting as a small team of 5, the concept of building a new E-invoice
          formatter service specifically to ease the pains of the common seller
          was a vision that we all shared. Features such as services dedicated
          to previewing, downloading and creating your invoice were all
          characteristics of our product which we wanted our users to enjoy.
          Expanding on this project over time, we&apos;ve consistently have had
          the user&apos;s satisfaction at the heart of our business values,
          whether it is from simple beginnings to now. Take a look for yourself!
        </p>
      </div>
    </motion.div>
  );
};
const BoxRight = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="block-box-right">
        <br></br>
        <h3>
          <strong>Striving for excellence</strong>
        </h3>
        <br></br>
        <p>
          As our company name suggests, we are constantly in the pursuit of
          elegance, whether that it is in our internal workings which the user
          never sees, or the words which you are looking at right now. Engrained
          in our company culture is the desire to always deliver on providing
          the optimum service for you, whether that is with customer support or
          making the E-invoice creation experience as simple and comfortable as
          possible.
        </p>
      </div>
    </motion.div>
  );
};
export { BoxLeft, BoxRight };
