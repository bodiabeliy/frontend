export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0EA5E9] to-[#1E40AF] z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mb-4"></div>
        <p className="text-white text-xl font-semibold">Loading...</p>
      </div>
    </div>
  );
}
