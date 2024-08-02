import { MoonLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { colors } from '@mui/material';
const SpinnerLoader = ({ showSpinner, adminView, blurBackground }) => {
  return (
    <>
      {showSpinner && (
        <>
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: '10000',
            }}
          >
            <MoonLoader color={colors.blue[200]} speedMultiplier={1.3} />
          </div>
          {blurBackground && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.4)', // Adjust the opacity as needed
                zIndex: '99999', // Ensure the background is behind the spinner
              }}
            ></div>
          )}
        </>
      )}
    </>
  );
};

export default SpinnerLoader;

// Setting default values for the props of BasicLayout
SpinnerLoader.defaultProps = {
  showSpinner: false,
  adminView: false,
  blurBackground: true,
};

// Typechecking props for the BasicLayout
SpinnerLoader.propTypes = {
  showSpinner: PropTypes.bool,
  adminView: PropTypes.bool,
  blurBackground: PropTypes.bool,
};
