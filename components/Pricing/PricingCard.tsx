// components/PricingCard.tsx
import React from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

interface PricingCardProps {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  billingPeriod?: string;
  buttonText?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  id,
  title,
  price,
  description,
  features,
  isPopular = false,
  billingPeriod = "month",
  buttonText = "Edit",
}) => {
  const router = useRouter();
    const { user, setUser, logout } = useUser();
  const onClick = () => {
    if(user){
      console.log(user , "fghkh");
      router.push(`/invoice?instituteId=${user?.id}&serviceid=${id}&billingPeriod=${billingPeriod}&price=${price}`)
    }else{
      router.push(`/signup?serviceid=${id}&billingPeriod=${billingPeriod}&price=${price}`);
    }
  }
  return (
    <div
      className={`rounded-lg p-6 flex flex-col h-full transition-colors duration-300 ease-in-out border relative ${
        isPopular
          ? "bg-gray-800 dark:bg-gray-800 text-white border-gray-700 dark:border-gray-500"
          : "bg-white dark:bg-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-4xl font-bold">${price}</span>
          <span
            className={`text-sm ${
              isPopular ? "text-gray-300" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            /{billingPeriod}
          </span>
        </div>
        <p
          className={`text-sm ${
            isPopular
              ? "text-gray-300 dark:text-gray-400"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className={`h-5 w-5 mr-2 ${
                  isPopular
                    ? "text-green-400 dark:text-green-500"
                    : "text-green-500 dark:text-green-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => onClick()}
        className={`w-full py-3 px-4 rounded-md font-medium transition-colors duration-300 ${
          isPopular
            ? "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white"
            : "bg-gray-800 hover:bg-gray-900 dark:bg-blue-600 dark:hover:bg-blue-700 text-white"
        }`}
      >
        {buttonText}
      </button>
      {isPopular && (
        <div className="absolute -top-3 -right-1.5 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          Popular
        </div>
      )}
    </div>
  );
};

export default PricingCard;
