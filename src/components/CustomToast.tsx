import { ToastContainer, cssTransition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'animate.css'

// https://fkhadra.github.io/react-toastify/api/css-transition
const customTransition = cssTransition({
  enter: 'animate__animated animate__super_faster animate__fadeInDown',
  exit: 'animate__animated animate__super_faster animate__fadeOutUp',
  appendPosition: false,
})

const CustomToast = () => (
  <ToastContainer
    position="top-center"
    autoClose={1000}
    limit={3}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable={false}
    pauseOnHover
    theme="light"
    transition={customTransition}
  />
)

export default CustomToast
