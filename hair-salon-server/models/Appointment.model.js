const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the Appointment model to whatever makes sense in this case
const appointmentSchema = new Schema(
  {
    service: {
      type: String,
      enum: [
        "jen's haircut",
        "kid's haircut",
        "lady's haircut",
        'beard trim',
        'highlight',
        'color',
        'styling',
      ],
      lowercase: true,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
      required: true,
    },

    stylist: { type: Schema.Types.ObjectId, ref: 'Stylist' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;
