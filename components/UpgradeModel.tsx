'use client';

interface Plan {
    name: string;
    price: string;
    period?: string;
    storage: string;
    features: string[];
    cta: string;
    popular: boolean;
}

interface UpgradeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const plans: Plan[] = [
    {
        name: 'Starter',
        price: 'Free',
        storage: '10 GB',
        features: [
            'Basic search',
            'Up to 100 documents',
            'Email support',
            '7-day history',
            'Basic analytics',
        ],
        cta: 'Current Plan',
        popular: false,
    },
    {
        name: 'Pro',
        price: '$29',
        period: '/month',
        storage: '2 TB',
        features: [
            'AI-powered search',
            'Unlimited documents',
            'Memory Graph',
            'Priority support',
            'Unlimited history',
            'Advanced analytics',
        ],
        cta: 'Upgrade to Pro',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: '$99',
        period: '/month',
        storage: 'Unlimited',
        features: [
            'Everything in Pro',
            'Custom integrations',
            'SSO & Advanced security',
            'Dedicated support',
            'API access',
            'Custom training',
        ],
        cta: 'Contact Sales',
        popular: false,
    },
];

export default function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl z-10">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
                                Choose Your Plan
                            </h2>
                            <p className="text-sm text-gray-500">
                                Select the perfect plan for your needs
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer text-gray-500"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl border-2 p-6 transition-all hover:shadow-lg bg-white ${plan.popular
                                    ? 'border-teal-600 shadow-md'
                                    : 'border-gray-200'
                                    }`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-teal-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                                    {plan.name}
                                </h3>

                                {/* Price */}
                                <div className="text-center mb-4">
                                    <span className="text-4xl font-extrabold text-gray-900">
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className="text-gray-500 text-sm">
                                            {plan.period}
                                        </span>
                                    )}
                                </div>

                                {/* Storage */}
                                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                                    <span className="text-sm text-gray-600">
                                        {plan.storage} storage
                                    </span>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                            <span className="text-teal-600 mt-0.5 shrink-0 font-bold">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${plan.popular
                                        ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg'
                                        : plan.name === 'Starter'
                                            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            : 'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Footer Note */}
                    <div className="mt-8 text-center pb-4">
                        <p className="text-xs text-gray-500">
                            All plans include a 14-day free trial. No credit card required.
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            Cancel anytime, no questions asked.
                        </p>
                    </div>
                </div>

                {/* Bottom Gradient Border - Teal Theme */}
                <div className="h-1 bg-linear-to-r from-teal-600 via-teal-500 to-teal-600 rounded-b-2xl"></div>
            </div>
        </div>
    );
}