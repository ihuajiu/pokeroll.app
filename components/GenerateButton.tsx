"use client";

import { useI18n } from "./I18nProvider";

export default function GenerateButton({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading?: boolean;
}) {
  const { dict } = useI18n();
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      aria-label={dict.common.generateAnotherAria}
      className="game-btn game-btn-primary px-5 py-2.5 disabled:cursor-not-allowed"
    >
      {loading ? dict.common.generating : dict.common.generateAgain}
    </button>
  );
}
