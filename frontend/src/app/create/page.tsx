"use client";

import { GameBoard } from "../../../components/game-board";
import { useStacks } from "../../../hooks/use-stacks";
import { EMPTY_BOARD, Move } from "../../../lib/contract";
import { formatStx, parseStx } from "../../../lib/stx-utils";
import { useState } from "react";

export default function CreateGame() {
  const { stxBalance, userData, connectWallet, handleCreateGame } = useStacks();

  const [betAmount, setBetAmount] = useState(0);
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onCellClick(index: number) {
    // Tidak bisa klik jika sedang dalam proses creating
    if (isCreating) return;

    const tempBoard = [...EMPTY_BOARD];
    tempBoard[index] = Move.X;
    setBoard(tempBoard);
  }

  function onCreateGame() {
    // Validasi terlebih dahulu
    if (isCreating) return;

    const moveIndex = board.findIndex((cell) => cell !== Move.EMPTY);
    if (moveIndex === -1) {
      setError("Please make a move first");
      return;
    }

    if (betAmount <= 0) {
      setError("Please enter a valid bet amount");
      return;
    }

    const move = Move.X;

    // Set loading state immediately untuk feedback UI
    setIsCreating(true);
    setError(null);

    // Handle promise tanpa await untuk tidak block UI
    handleCreateGame(parseStx(betAmount), moveIndex, move)
      .then(() => {
        // Success - bisa redirect atau show success message
        console.log("Game created successfully!");
      })
      .catch((err) => {
        console.error("Failed to create game:", err);
        setError(err.message || "Failed to create game");
      })
      .finally(() => {
        setIsCreating(false);
      });
  }

  return (
    <section className="flex flex-col items-center py-20">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold">Create Game</h1>
        <span className="text-sm text-gray-500">
          Make a bet and play your first move
        </span>
      </div>

      <div className="flex flex-col gap-4 w-[400px]">
        <GameBoard
          board={board}
          onCellClick={onCellClick}
          nextMove={Move.X}
          cellClassName="size-32 text-6xl"
        />

        <div className="flex items-center gap-2 w-full">
          <span className="">Bet: </span>
          <input
            type="number"
            className="w-full rounded bg-gray-800 px-1"
            placeholder="0"
            value={betAmount}
            onChange={(e) => {
              setBetAmount(parseFloat(e.target.value));
            }}
            disabled={isCreating}
          />
          <div
            className={`text-xs px-1 py-0.5 cursor-pointer border border-gray-600 rounded ${
              isCreating
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-700 bg-gray-600"
            }`}
            onClick={() => {
              if (!isCreating) {
                setBetAmount(formatStx(stxBalance));
              }
            }}
          >
            Max
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        {userData ? (
          <button
            type="button"
            className={`px-4 py-2 rounded text-white ${
              isCreating
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={onCreateGame}
            disabled={isCreating}
          >
            {isCreating ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Creating Game...
              </span>
            ) : (
              "Create Game"
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={connectWallet}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            disabled={isCreating}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </section>
  );
}
