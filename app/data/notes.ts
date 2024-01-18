import fs from 'fs/promises'
import type { Note } from '~/types/note';

export async function getStoredNotes() {
	const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8'})
	const data = JSON.parse(rawFileContent);
	const storedNotes = data.notes ?? [];
	return storedNotes
}

export function storedNotes(notes: Note[]) {
	return fs.writeFile('notes.json', JSON.stringify({notes: notes || []}))
}