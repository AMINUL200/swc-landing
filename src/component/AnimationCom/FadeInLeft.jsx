import { motion } from "motion/react"

const FadeInLeft = ({
     children,
    as = "div",
    delay = 0,
    duration = 0.5,
    margin = "-50px",
    className = "",
    key,
    ...props
}) => {
    const Component = motion[as] || motion.div;

    return (
        <Component
            key={key}
            className={className}
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration, delay }}
            viewport={{ once: false, margin }}
            {...props}
        >
            {children}
        </Component>
    );
}
export default FadeInLeft;