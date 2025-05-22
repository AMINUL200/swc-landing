import { motion } from "motion/react"

const FadeInRight = ({
    children,
    as = "div",
    delay = 0,
    duration = 0.5,
    margin = "-50px",
    className = "",
    ...props
}) => {
    const Component = motion[as] || motion.div;

    return (
        <Component
            className={className}
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration, delay }}
            viewport={{ once: true, margin }}
            {...props}
        >
            {children}
        </Component>
    );
}
export default FadeInRight;