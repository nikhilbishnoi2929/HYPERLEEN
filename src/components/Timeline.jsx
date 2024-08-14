import React from 'react';
import { Steps } from '../common/CommonHelper';

const WorkflowSteps = () => {
  return (
    <div className="relative flex flex-col space-y-12 lg:p-6 sm:p-4 p-2 bg-white rounded-lg max-w-md mx-auto pl-5">
      {Steps.map((val, index) => (
        <div key={index} className="relative flex items-start">
          <div className="flex items-center justify-center max-w-12 min-h-12 w-full h-full rounded-full bg-[#E6EDF7]">
            {val.icon}
          </div>
          <div className="ml-6">
            <h3 className="text-lg font-semibold text-black">{val.title}</h3>
            <p className="mt-2 text-sm text-grey">{val.description}</p>
          </div>
          {index < Steps.length - 1 && (
            <div className="absolute left-6 top-16 h-full border-l-2 border-dotted border-blue-200 transform -translate-y-6"></div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Timeline;
