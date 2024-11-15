import { usePollCreation } from "@/app/hooks/usePollCreation";

const QuestionForm = () => {
  const {
    questionText,
    setQuestionText,
    option,
    setOption,
    options,
    handleAddOption,
    handleAddQuestion,
  } = usePollCreation();

  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">Question</label>
      <input
        type="text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        className="border rounded p-2 w-full"
        placeholder="Enter question"
      />

      <div className="mt-2">
        <label className="block font-medium">
          Options (at least 2 required)
        </label>
        <input
          type="text"
          value={option}
          onChange={(e) => setOption(e.target.value)}
          className="border rounded p-2 w-full mt-2"
          placeholder="Enter option"
        />
        <div className="flex justify-center mt-2">
          <button
            onClick={handleAddOption}
            className="bg-black text-white p-2 rounded w-1/2"
          >
            Add Option
          </button>
        </div>

        <div className="mt-2">
          {options.map((opt, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 mt-2"
            >
              {opt.toLocaleUpperCase()}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleAddQuestion}
          disabled={options.length < 2}
          className="bg-blue-500 text-white p-2 rounded w-1/2"
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default QuestionForm;
