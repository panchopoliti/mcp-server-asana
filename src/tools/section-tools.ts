import { Tool } from "@modelcontextprotocol/sdk/types.js";

export const deleteSectionTool: Tool = {
  name: "asana_delete_section",
  description: "Delete a section from a project. The section must be empty (no tasks) before it can be deleted.",
  inputSchema: {
    type: "object",
    properties: {
      section_id: {
        type: "string",
        description: "The section GID to delete"
      }
    },
    required: ["section_id"]
  }
};

export const addTaskToSectionTool: Tool = {
  name: "asana_add_task_to_section",
  description: "Move a task to a section within its project",
  inputSchema: {
    type: "object",
    properties: {
      section_id: {
        type: "string",
        description: "The section GID to add the task to"
      },
      task_id: {
        type: "string",
        description: "The task GID to move"
      },
      insert_before: {
        type: "string",
        description: "A task GID to insert the task before (optional)"
      },
      insert_after: {
        type: "string",
        description: "A task GID to insert the task after (optional)"
      }
    },
    required: ["section_id", "task_id"]
  }
};
