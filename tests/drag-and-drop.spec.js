import { test, expect } from '../fixtures/pageFixtures.js';

test('drags the draggable element onto the droppable target', async ({ homePage }) => {
  const { dragAndDrop } = homePage;

  await expect(dragAndDrop.droppable.locator('p')).toHaveText('Drop here');

  await dragAndDrop.dragToTarget();

  await expect(dragAndDrop.droppable.locator('p')).toHaveText('Dropped!');
  await expect(dragAndDrop.droppable).toHaveClass(/ui-state-highlight/);
});
