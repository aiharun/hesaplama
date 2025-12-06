import Link from 'next/link';
import { Calculator } from '@/data/calculators';

interface CalculatorCardProps {
    calculator: Calculator;
    index?: number;
}

export default function CalculatorCard({ calculator, index = 0 }: CalculatorCardProps) {
    return (
        <Link
            href={`/${calculator.slug}`}
            className="calc-card"
            style={{
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.5s ease forwards',
                opacity: 0
            }}
        >
            <span className="calc-card-icon">{calculator.icon}</span>
            <h3 className="calc-card-title">{calculator.shortTitle}</h3>
            <p className="calc-card-desc">{calculator.description}</p>
            <span className="calc-card-arrow">→</span>
        </Link>
    );
}
