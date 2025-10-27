import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 inline-block cursor-pointer";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-transparent text-black border border-black/20 hover:border-black/40 hover:bg-black/5 hover:-translate-y-0.5"
  };
  
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
};

export default Button;
