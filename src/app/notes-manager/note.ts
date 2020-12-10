/**
 * Declaration of the note data structure.
 *
 * @author orlando.espinosa
 * @date   2020-12-10
 */

/**
 * Notes data structure
 */
export type Note = {
  /**
   * The timestamp note's unique identifier.
   */
  id: number;

  /**
   * The note's title.
   */
  title: string;

  /**
   * The note's text body
   */
  body: string;
}